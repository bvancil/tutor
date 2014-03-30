// Note that this doesn't work for some reason.
Handlebars.registerHelper('pluralize', function(number, singularNoun, pluralNoun) {
	if (n==1) return '1 ' + singularNoun;
	else return n + ' ' + pluralNoun;
});