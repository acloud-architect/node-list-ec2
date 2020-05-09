var AWS = require('aws-sdk');

AWS.config.update({region: 'ap-southeast-2'});

var ec2 = new AWS.EC2();

// var param = {
//     DryRun: false
// };

ec2.describeInstances({}, function(err, data){
    if(err){
        console.log('Error', err.stack)
    }else{
        data.Reservations.forEach(function(item, index, arr){
            item.Instances.forEach(function(item, index, arr){
                console.log(item.InstanceId, item.State.Name)
            })
        })
    }
})

