// Module Pattern
// Immediatelly invoked function expression
var todos = (function() {
        var todoList = [{
                title: 'a',
                done: false
            },
            {
                title: 'b',
                done: true
            }
        ];

        return {
            numberOfDoneTodos: function() {
                var i = 0,
                    counter = 0;
                for (i; i < todoList.length; i++) {
                    if (todoList[i].done) {
                        counter++;
                    }
                }
                return counter;
            }
        };

    })(),
    TodoCtrl = function(todos) {
        this.userName = 'Zuzka';

        this.summary = function() {
            console.log('Hello ' + this.userName + ' you have done ' + todos.numberOfDoneTodos() + ' todos');
        };

    },
    todoCtrl;

todoCtrl = new TodoCtrl(todos);
todoCtrl.summary();
