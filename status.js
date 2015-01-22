var template        = new ReactiveVar('bootstrap3')
var templateOptions = new ReactiveVar({
  classes: 'alert-warning'
})

Status = {
  template: function () {
    return template.get()
  },

  templateOptions: function () {
    return templateOptions.get()
  },

  setTemplate: function (name, options) {
    template.set(name)

    if (options) templateOptions.set(options)
  }
}
