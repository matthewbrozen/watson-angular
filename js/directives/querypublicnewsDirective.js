angular.module('WatsonApp').directive("querypublicnewsDirective", function() {
    return {
        template:`<div class="panel panel-default"><div class="panel-body"><div class="jumbotron"><h1>Watson Discovery Service Interface</h1><p> About the Public News Collection </p></div><br><div class="well"><h1> Query Builder Public News</h1><form id="signup"><div clas="row"><div class="col-sm-4"><div><label for="sample">Sample: </label><input type="text" name="sample"></div><div><label for="sample">Sample: </label><input type="text" name="sample"></div></div></div><div clas="row"><div class="col-sm-4"><div><label for="sample">Sample: </label><input type="text" name="sample"></div><div><label for="sample">Sample: </label><input type="text" name="sample"></div></div></div><div clas="row"><div class="col-sm-4"><div><label for="sample">Sample: </label><input type="text" name="sample"></div><div><label for="sample">Sample: </label><input type="text" name="sample"></div></div></div><br><br><br><br><div class="text-center"><input type="submit" value="Query" class="btn btn-default"></div></form><br><br></div><div class="well"><h3> Existing Queries </h3><div class="btn-group" role="group"><button type="button" class="btn btn-default" style="margin-right:30px; margin-left:30px;">Sample</button><button type="button" class="btn btn-default" style="margin-right:30px; margin-left:30px;">Sample</button><button type="button" class="btn btn-default" style="margin-right:30px; margin-left:30px;">Sample</button><button type="button" class="btn btn-default" style="margin-right:30px; margin-left:30px;">Sample</button></div></div></div></div>`
        };
});
