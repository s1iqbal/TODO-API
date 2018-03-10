const expect = require('expect'),
      request = require('supertest'),
      {app} = require('./../server'),
      {mongoose} = require('./../db/mongoose'),
      {Todo} = require('./../models/todo'),
      {User} = require('./../models/user');

//database will be empty before every request
beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    let text = "Test";

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((error, res) => {
        if (error) {
          return done(error);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos.text).toBe(text);
          done();
        }).catch((error) => {
          done(error);
        });
      })
  });
});
