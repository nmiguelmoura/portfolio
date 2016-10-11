/**
 * Created by Nuno on 10/10/16.
 */

var nmm=nmm||{};
nmm.Main=(function(){
    'use strict';

    function Main(){
        this._init();
    }

    Main.prototype._outHandler=function(event){
        //mouse out actions
        var expectedTag='A',
            key=event.currentTarget.key;

        if(event.currentTarget && event.currentTarget.tagName===expectedTag){
            //hide info text
            this._infos[key].style.display='none';

            //remove mouse out listener
            this._workLinks[key].removeEventListener('mouseout',this._outBind,false);
        }
    };

    Main.prototype._overHandler=function(event){
        //mouse over actions
        var expectedTag='A',
            key=event.currentTarget.key;

        if(event.currentTarget && event.currentTarget.tagName===expectedTag){
            //show info text
            this._infos[key].style.display='block';
            console.log(this._infos[key],this._infos[key].style.display);

            //add mouse out listener
            this._workLinks[key].addEventListener('mouseout',this._outBind,false);
        }
    };

    Main.prototype._addListeners=function(){
        var i,length=this._workLinks.length;
        for(i=0;i<length;i++){
            //add mouse over listener only to mouse interactions
            //exclude touch screens
            if('ontouchstart' in document.documentElement){
                this._workLinks[i].addEventListener('mouseover',this._overHandler.bind(this),false);
            }
        }

        //get outHandler bind to allow add and remove event
        this._outBind=this._outHandler.bind(this);
    };

    Main.prototype._getReferences=function(){
        //get work-link classes
        var links=document.getElementsByClassName('work-link'),
            //get info paragraphs
            info=document.getElementsByClassName('tile-info-p');

        this._workLinks=[];
        this._infos=[];
        var i,length=links.length;
        for(i=0;i<length;i++){
            //add key to each link
            links[i].key=i;

            //push links and infos to arrays
            this._workLinks.push(links[i]);
            this._infos.push(info[i]);
        }
    };

    Main.prototype._init=function(){
        //get class references
        this._getReferences();

        //add mouseoverListener
        this._addListeners();
    };

    return Main;
})();

nmm.main=new nmm.Main();
