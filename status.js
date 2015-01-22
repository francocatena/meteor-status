var template = new ReactiveVar('bootstrap3')

Status = {
  template: function () {
    return template.get()
  },

  setTemplate: function (name) {
    template.set(name)
  }
}
