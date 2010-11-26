document.addEvent('domready', function(){
    var iStore = new iStorage(); 
    
    function storeValues() {
        //STORE KEYS WITH DIFFERENT DATA TYPES
        iStore.set('mynum', 125); 
        iStore.set('mybool', true); 
        iStore.set('mystring', 'hello world'); 
        iStore.set('list', ['dog', 'cat', 'sheep']); 
        iStore.set('myobj',  {
            'color': 'red',
            'shape': 'circle',
            'height': 100, 
            'width': 200
        }); 
    }
    
    $('save-data').addEvent('click', storeValues); 
    $('clear').addEvent('click', iStore.clear); 
    
    if(iStore.get('mystring')) {
        $$('h2').set('html', iStore.get('mystring'));
    }
    
    if(iStore.get('list')) {
        var list = $('list');
        var listItems = iStore.get('list'); 
        
        listItems.each(function(item){
            list.adopt(new Element('li', {
                'html': item
            })); 
        });
    }
});