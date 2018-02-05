(function() {
  // override default frontend ordering
  $.extend(Taco.Collections.Tasks.prototype, {
    comparator: function(task) {
      return -task.get('ordinal');
    }
  });

  // override data sent to "reorder" call
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (settings.url.match(/\/reorder.json$/)) {
        data = $.deparam(settings.data);
        data.lists.forEach(function(list) {
          if (list.board_task_ids) {
            list.board_task_ids.reverse();
          }
        });
        settings.data = $.param(data);
      }
    }
  });

  // override how new task view gets added
  $.extend(Taco.Views.TasksIndex.prototype, {
    // override to append instead of prepend
    addOne: function(task) {
      if (task.get('current') == this.options.current) {
        this.appendOne(task);
      }
    },

    // new method (based on prependOne)
    appendOne: function(task) {
      var element = new Taco.Views.TaskView({ model: task }).render();
      $(element.el).hide().appendTo(this.$el).slideDown(400);
    }
  });
})();
