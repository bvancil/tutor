// Fixture data 
if (Posts.find().count() === 0) {
  // Create roles
  var userRoles = ['admin', 'user-admin', 'give-tokens', 'take-tokens','1','2','3','4','5','6','7','8', 'ETM', 'CVPM', 'MTM', 'BFPM', 'CAPM', 'UFPM'];
  /*
    admin: superuser
    user-admin: can administer users
    give-tokens: can assign students tokens for doing tutoring so that they can reassess
    take-token: can remove tokens from students
    1,2,3,4,5,6,7,8: which period the student is in

    One idea I have is to have tokens be roles.  Then the admin interface can be used to add or remove them.  They can be used in a standard way to check if students are allowed to schedule an assessment.
    The tokens would be:
    ETM: Energy Transfer Model
    CVPM: Constant Velocity Particle Model
    MTM: Momentum Transfer Model
    BFPM: Balanced Force Particle Model
    CAPM: Constant Acceleration Particle Model
    UFPM: Unbalanced Force Particle Model

  */
  _.each(userRoles, function(role) {
    Roles.createRole(role);
  });   

  // One-time script to create AdminUser variable and a few roles.
  createUserAdminRoles();

  // Create superuser:
  var rootId = Accounts.createUser({
    username: "monkey",
    email: "",
    password: "monkey",
    profile: { name: "monkey" }
  });
  Roles.addUsersToRoles(rootId, ['give-tokens', 'take-tokens', 'admin', 'user-admin']);

  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}
