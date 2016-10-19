/**
 * Created by huangjianhua on 2016/10/19.
 */

/*define(['example'], function() {

    return {
        topic: 'my define',
        desc: 'this is one way to define'
    }
});*/


exports.define = {
    topic: 'my export',
    desc: 'this is other way to define ',
    sayHello: function() {
        console.log('topic ' + this.topic + this.desc);
    }
}