app.factory('suggestions', [function(){
    var demoSuggestions = {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: [
                    {
                        upvotes: 1,
                        body: 'We like the pizza!',
                    },
                    {
                        upvotes: 0,
                        body: 'Yes, we agree, the pizza really is great!'
                    }
                ],
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: [],
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: [],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: [],
            },
        ]
    };
    console.log("data: " + demoSuggestions);
    return demoSuggestions;
}]);