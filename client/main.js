// I don't know where to put this from https://github.com/kenyee/meteor-accounts-admin-ui/

AdminUser.deletingUser = function(id) {
  if (console) {
    console.log("Deleting user " + id);
  }
  return true;
};

AdminUser.savingUser = function(id, template) {
  if (console) {
    console.log("Saving user " + id);
  }
  // set AdminUser.customUserProps w/ any custom properties you want to set
  return true;
};
