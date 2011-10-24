// See README.md

Ext.require(['*']);

Ext.onReady(function(){

    // Define an HTML fragment; the curly braces are template keys.
    var html = '{name} contact info is {email}'

    // Create a template using the HTML then compile it for speed.
    var tpl = new Ext.Template(html, { compiled: true });

    // Create some aribrary data to use with the template.
    var data = {name: 'Alice', email: 'alice@example.com'}

    // Append content to the div "results" in the file index.html.
    tpl.append('results', data);

});