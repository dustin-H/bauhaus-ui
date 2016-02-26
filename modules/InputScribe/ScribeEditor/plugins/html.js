
module.exports = function (prompt) {
    return function (scribe) {
        var html = new scribe.api.Command('insertHTML');
        //video.nodeName = 'IFRAME';

        html.execute = function () {
            var data = prompt ? prompt() : window.prompt('Enter valid html code! For example an embedded video!');
            if (!data) return false;

            scribe.api.SimpleCommand.prototype.execute.call(this, data);
        }

        scribe.commands.htmlPrompt = html;
    };
}
