var iplod = angular.module('iplod');

/*top of hierarchy*/
iplod.controller('incidentsCntl',
	function($scope, $dialog){
		$scope.media = [{id:"1", name: "ronaldo1", description:"description", tag:"football", directory:"videos/ronaldo1.mp4"},
		{id:"2", name: "ronaldo2", description:"description", tag:"football", directory:"videos/ronaldo2.mp4"},
		{id:"3", name: "ronaldo3", description:"description", tag:"football", directory:"videos/ronaldo3.mp4"},
		{id:"4", name: "ronaldo4", description:"description", tag:"football", directory:"videos/ronaldo4.mp4"}];

		$scope.collection =[];



		$scope.save = function() {
			if ($scope.collection.length != 0){
			var msgbox = $dialog.messageBox('Save before you leave ?','You have not saved your collection, would you like to save before you leave ?', [{label:'Yes, Please!', result: 'yes'},{label:'Nope', result: 'no'}]);
        msgbox.open().then(function(result){
            if(result === 'yes') {
             alert("saved");
             window.location.assign("");
            }
            else{
            	window.location.assign("");
            }
        }); 
   
		}
		else {
			window.location.assign("");
		}
	}
}
);

iplod.controller('collectionCntl',
	function($scope){
		$scope.remove = function(index){
			$scope.collection.splice(index,1);
		}


	}
);

iplod.controller('evidenceCntl',
	function($scope){
		$scope.add = function(video){
			$scope.collection.push(
				{name: video.name, directory:video.directory});
		}
	}
);

iplod.controller('controlsCntl',
	function($scope){
	}
);
