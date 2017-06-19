angular.module('WatsonApp').directive("savedsentimentsDirective", function() {
    return {
        template:`<div class="panel panel-default"><div class="panel-body"><div class="jumbotron"><h1>Watson Discovery Service Interface</h1><p> About the Saved Sentiments </p></div><br><div class="well"><h3> Saved Sentiments</h3><table class="table table-striped"><thead><tr><th class="text-center">Company</th><th class="text-center">Count</th><th class="text-center">Sentiment</th></tr></thead><tbody><tr><td>Microsoft</td><td>1</td><td>.25</td></tr><tr><td>Google</td><td>2</td><td>.014</td></tr><tr><td>Amazon</td><td>3</td><td>-.042</td></tr></tbody></table></div></div></div>`
        };
});
