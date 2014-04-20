// Note that this doesn't work for some reason.
Handlebars.registerHelper('pluralize', function(number, singularNoun, pluralNoun) {
	if (number===1)
	  return '1 ' + singularNoun;
	else
	  return number + ' ' + pluralNoun;
});

Handlebars.registerHelper('isAdminUser', function() {
  return Roles.userIsInRole(Meteor.user(), ['admin']);
});
