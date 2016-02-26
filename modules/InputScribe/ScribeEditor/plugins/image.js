
module.exports = function (prompt) {
    return function (scribe) {
        var imagePromptCommand = new scribe.api.Command('insertImage');
        imagePromptCommand.nodeName = 'IMG';

        imagePromptCommand.execute = function () {
            var link = prompt ? prompt() : window.prompt('Enter image url');
            if (!link) return false;

            scribe.api.SimpleCommand.prototype.execute.call(this, link);
        }

        scribe.commands.imagePrompt = imagePromptCommand;
    };
}
