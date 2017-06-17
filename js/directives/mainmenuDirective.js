angular.module('WatsonApp').directive("mainmenuDirective", function() {
    return {
        template:`<div class="panel panel-default"><div class="panel-body"><div class="jumbotron"><h1>Watson Discovery Service Interface</h1><p> About the main menu </p></div><div class="well"><button type="button" class="btn btn-default" style="margin-right:60px; margin-left:60px;">Personal Collections</button><button type="button" class="btn btn-default" style="margin-right:60px; margin-left:60px;">Work with Public News Collection</button><button type="button" class="btn btn-default" style="margin-right:60px; margin-left:60px;">View Saved Sentiments</button></div></div></div>`
        };
});
