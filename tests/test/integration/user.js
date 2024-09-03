import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import app from '../../../src/app';
import * as UserFixtures from '../fixtures/user';
import * as Message from '../../../src/lib/enums/lib.enums.message';

const { newUserAccount } = UserFixtures;

chai.use(chaiHttp);

describe('User Route', () => {
  describe('Create User', () => {
    it('should CREATE and return user information', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .send({
          ...newUserAccount,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal(Message.RESOURCE_CREATED('User'));
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
    it('should return euser information successfully', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .send({
          ...newUserAccount,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal(Message.RESOURCE_FETCHED('User'));
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
});
