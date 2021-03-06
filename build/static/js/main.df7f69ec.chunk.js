(this['webpackJsonpcapstone-group-3'] =
  this['webpackJsonpcapstone-group-3'] || []).push([
  [0],
  {
    105: function(e, t, a) {},
    106: function(e, t, a) {},
    111: function(e, t, a) {},
    114: function(e, t, a) {},
    126: function(e, t, a) {},
    127: function(e, t, a) {},
    128: function(e, t, a) {},
    129: function(e, t, a) {},
    130: function(e, t, a) {},
    131: function(e, t, a) {},
    132: function(e, t, a) {},
    133: function(e, t, a) {},
    225: function(e, t, a) {},
    226: function(e, t, a) {},
    227: function(e, t, a) {},
    228: function(e, t, a) {},
    229: function(e, t, a) {},
    230: function(e, t, a) {},
    231: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(30),
        c = a.n(o),
        s = a(14),
        i = (a(96), a(13)),
        l = a(19),
        u = a(2),
        p = a.n(u),
        d = a(31),
        m = a(8),
        h = a(9),
        f = a(10),
        g = a(11),
        b = a(12),
        j = a(47),
        E =
          (a(98),
          a(100),
          a(103),
          j.initializeApp({
            apiKey: 'AIzaSyDSpoWy8Ewzv50_et07LvZE6InGXw0sfng',
            authDomain: 'capstone-ei35-group3.firebaseapp.com',
            databaseURL: 'https://capstone-ei35-group3.firebaseio.com/',
            projectId: 'capstone-ei35-group3',
            storageBucket: 'capstone-ei35-group3.appspot.com',
            messagingSenderId: '153426176744',
            appId: '1:153426176744:web:3b99528cbdeb0456a5b75d',
            measurementId: 'G-KQKTHEVG46',
          })),
        _ = r.a.createContext(),
        w = a(18),
        v = E.firestore(),
        x = {
          createOwner: function(e, t) {
            var a = this;
            return (
              (e.role = 'owner'),
              p.a
                .async(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          p.a.awrap(
                            v
                              .collection('organizations')
                              .doc(t)
                              .set({ name: t })
                          )
                        );
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                })
                .then(function() {
                  return a.createUserInOrg(e, t);
                }),
              'success'
            );
          },
          getAllOrgs: function() {
            return p.a.async(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      v.collection('organizations').get()
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            });
          },
          createUserInOrg: function(e, t) {
            e.new = !0;
            var a = v.collection('organizations').doc(t);
            return a.get().then(function(t) {
              if (t.exists)
                return a.onSnapshot(function() {
                  a.collection('users')
                    .doc(e.email)
                    .set(e);
                });
              throw new Error('org not found');
            });
          },
          jobsListener: function(e, t) {
            return v
              .collection('organizations')
              .doc(e)
              .collection('projects')
              .doc(t)
              .collection('jobs');
          },
          promoteUser: function(e, t) {
            return v
              .collection('organizations')
              .doc(e)
              .collection('users')
              .doc(t)
              .update({ role: 'project manager', promoted: !0 });
          },
          projectsListener: function(e, t) {
            return v
              .collection('organizations')
              .doc(e)
              .collection('projects')
              .doc(t);
          },
          getEmployeeProjects: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return a.abrupt(
                      'return',
                      v
                        .collection('organizations')
                        .doc(t)
                        .collection('projects')
                        .where('project_workers', 'array-contains', e)
                        .get()
                    );
                  case 1:
                  case 'end':
                    return a.stop();
                }
            });
          },
          getManagerProjects: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return a.abrupt(
                      'return',
                      v
                        .collection('organizations')
                        .doc(t)
                        .collection('projects')
                        .where('project_manager', '==', e)
                        .get()
                    );
                  case 1:
                  case 'end':
                    return a.stop();
                }
            });
          },
          getProjectJobsForEmployee: function(e, t, a) {
            return p.a.async(function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return n.abrupt(
                      'return',
                      v
                        .collection('organizations')
                        .doc(t)
                        .collection('projects')
                        .doc(a)
                        .collection('jobs')
                        .where('project_workers', 'array-contains', e)
                        .get()
                    );
                  case 1:
                  case 'end':
                    return n.stop();
                }
            });
          },
          initDashboard: function(e, t, a) {
            var n, r;
            return p.a.async(function(o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (
                      (n = []),
                      (r = []),
                      (o.next = 4),
                      p.a.awrap(
                        x.getProjectsByRole({ name: e, org: a, role: t })
                      )
                    );
                  case 4:
                    if (
                      (o.sent.forEach(function(e) {
                        return n.push(e.data());
                      }),
                      'owner' !== t)
                    ) {
                      o.next = 11;
                      break;
                    }
                    return (o.next = 9), p.a.awrap(x.getProjectManagers(a));
                  case 9:
                    o.sent.forEach(function(e) {
                      return r.push(e.data());
                    });
                  case 11:
                    return o.abrupt('return', {
                      name: e,
                      role: t,
                      projects: n,
                      project_managers: r,
                    });
                  case 12:
                  case 'end':
                    return o.stop();
                }
            });
          },
          getProjectsByRole: function(e) {
            return 'project worker' === e.role
              ? v
                  .collection('organizations')
                  .doc(e.org)
                  .collection('projects')
                  .where('project_workers', 'array-contains', e.name)
                  .get()
              : 'project manager' === e.role
              ? v
                  .collection('organizations')
                  .doc(e.org)
                  .collection('projects')
                  .where('project_manager', '==', e.name)
                  .get()
              : v
                  .collection('organizations')
                  .doc(e.org)
                  .collection('projects')
                  .get();
          },
          getProjectById: function(e, t) {
            return v
              .collection('organizations')
              .doc(t)
              .collection('projects')
              .doc(e)
              .get();
          },
          deleteProjectById: function(e, t) {
            return v
              .collection('organizations')
              .doc(t)
              .collection('projects')
              .doc(e)
              .delete();
          },
          deleteJobById: function(e, t, a) {
            return v
              .collection('organizations')
              .doc(a)
              .collection('projects')
              .doc(t)
              .collection('jobs')
              .doc(e)
              .delete();
          },
          addProject: function(e) {
            return (
              e.project_manager || (e.project_manager = 'unassigned'),
              v
                .collection('organizations/'.concat(e.org_id, '/projects'))
                .add(e)
            );
          },
          setProjId: function(e, t) {
            return v
              .collection('organizations/'.concat(t, '/projects'))
              .doc(''.concat(e))
              .update({ id: e });
          },
          updateProject: function(e) {
            return v
              .collection('organizations')
              .doc(e.org_id)
              .collection('projects')
              .doc(e.id)
              .update(e);
          },
          setProjectsManager: function(e, t, a) {
            return v
              .collection('organizations')
              .doc(t)
              .collection('projects')
              .doc(e)
              .update({ project_manager: a });
          },
          getUser: function(e, t) {
            return v
              .collection('organizations')
              .doc(t)
              .collection('users')
              .where('email', '==', e)
              .get();
          },
          getJobs: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return a.abrupt(
                      'return',
                      v
                        .collection('organizations')
                        .doc(e)
                        .collection('projects')
                        .doc(t)
                        .collection('jobs')
                        .get()
                    );
                  case 1:
                  case 'end':
                    return a.stop();
                }
            });
          },
          getEmployees: function(e) {
            return p.a.async(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      'return',
                      v
                        .collection('organizations')
                        .doc(e)
                        .collection('users')
                        .where('role', '==', 'project worker')
                        .get()
                    );
                  case 1:
                  case 'end':
                    return t.stop();
                }
            });
          },
          getProjectManagers: function(e) {
            return v
              .collection('organizations')
              .doc(e)
              .collection('users')
              .where('role', '==', 'project manager')
              .get();
          },
          addJob: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      p.a.awrap(
                        v
                          .collection(
                            'organizations/'
                              .concat(e.organization, '/projects/')
                              .concat(t, '/jobs')
                          )
                          .add(e)
                          .catch(function(e) {
                            return e;
                          })
                          .then(function(a) {
                            v.collection(
                              'organizations/'
                                .concat(e.organization, '/projects/')
                                .concat(t, '/jobs')
                            )
                              .doc(''.concat(a.id))
                              .update({ id: a.id })
                              .catch(function(e) {
                                return e;
                              });
                          })
                      )
                    );
                  case 2:
                  case 'end':
                    return a.stop();
                }
            });
          },
          updateEdit: function(e, t, a, n) {
            return p.a.async(function(r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (r.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(n)
                          .collection('projects')
                          .doc(a)
                          .collection('jobs')
                          .doc(t)
                          .update({ edit: e })
                      )
                    );
                  case 2:
                  case 'end':
                    return r.stop();
                }
            });
          },
          updateJobAlert: function(e) {
            return p.a.async(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(e.organization)
                          .collection('projects')
                          .doc(e.project_id)
                          .collection('jobs')
                          .doc(e.id)
                          .update({ alert: e.alert })
                      )
                    );
                  case 2:
                  case 'end':
                    return t.stop();
                }
            });
          },
          updateProjectWorkers: function(e, t, a) {
            return p.a.async(function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (n.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(a)
                          .collection('projects')
                          .doc(e)
                          .update({ project_workers: t })
                      )
                    );
                  case 2:
                  case 'end':
                    return n.stop();
                }
            });
          },
          updateJob: function(e) {
            return p.a.async(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(e.organization)
                          .collection('projects')
                          .doc(e.project_id)
                          .collection('jobs')
                          .doc(e.id)
                          .update(Object(w.a)({}, e))
                      )
                    );
                  case 2:
                  case 'end':
                    return t.stop();
                }
            });
          },
          updateJobStatus: function(e, t, a, n, r, o) {
            return p.a.async(function(c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    return (
                      (c.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(r)
                          .collection('projects')
                          .doc(a)
                          .collection('jobs')
                          .doc(e)
                          .update({ status: t, approval: n, date_completed: o })
                      )
                    );
                  case 2:
                  case 'end':
                    return c.stop();
                }
            });
          },
          updateJobApproval: function(e, t) {
            return p.a.async(
              function(a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.next = 2),
                        p.a.awrap(
                          v
                            .collection('organizations')
                            .doc(this.state.user.org)
                            .collection('projects')
                            .doc(t)
                            .collection('job')
                            .doc(e)
                            .update({ approval: !0, status: 'complete' })
                        )
                      );
                    case 2:
                    case 'end':
                      return a.stop();
                  }
              },
              null,
              this
            );
          },
          editJob: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(t.organization)
                          .collection('projects')
                          .doc(t.project_id)
                          .collection('jobs')
                          .doc(e)
                          .update(t)
                      )
                    );
                  case 2:
                  case 'end':
                    return a.stop();
                }
            });
          },
          updateAndSetJobs: function(e, t, a) {
            var n, r;
            return p.a.async(
              function(o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      (n = this.state.jobs.findIndex(function(t) {
                        return t.id === e;
                      })),
                        ((r = this.state.jobs)[n].status = t),
                        (r[n].approval = a),
                        this.setState({ jobs: r });
                    case 5:
                    case 'end':
                      return o.stop();
                  }
              },
              null,
              this
            );
          },
          editAndSetJobs: function(e, t) {
            var a, n;
            return p.a.async(
              function(r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      (a = this.state.jobs.findIndex(function(t) {
                        return t.id === e;
                      })),
                        ((n = this.state.jobs)[a] = t),
                        this.setState({ jobs: n });
                    case 4:
                    case 'end':
                      return r.stop();
                  }
              },
              null,
              this
            );
          },
          updateWorker: function(e, t) {
            return p.a.async(function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(t)
                          .collection('users')
                          .doc(e.email)
                          .update(Object(w.a)({}, e))
                      )
                    );
                  case 2:
                  case 'end':
                    return a.stop();
                }
            });
          },
          updatePromoted: function(e) {
            return p.a.async(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      p.a.awrap(
                        v
                          .collection('organizations')
                          .doc(e.org)
                          .collection('users')
                          .doc(e.email)
                          .update({ promoted: !1 })
                      )
                    );
                  case 2:
                  case 'end':
                    return t.stop();
                }
            });
          },
        },
        y = x,
        k = a(84),
        P = a.n(k);
      a(105);
      function N(e) {
        return r.a.createElement(
          'div',
          { className: 'Loading' },
          r.a.createElement(P.a, {
            type: 'spokes',
            color: '#3b59ff',
            height: 125,
            width: 125,
          })
        );
      }
      var D = a(3),
        C = function(e, t, a) {
          var r = Object(n.useState)(e),
            o = Object(i.a)(r, 2),
            c = o[0],
            s = o[1],
            l = Object(n.useState)({}),
            u = Object(i.a)(l, 2),
            p = u[0],
            m = u[1],
            h = Object(n.useState)([]),
            f = Object(i.a)(h, 2),
            g = f[0],
            b = f[1],
            j = Object(n.useState)(!1),
            E = Object(i.a)(j, 2),
            _ = E[0],
            v = E[1];
          Object(n.useEffect)(
            function() {
              _ && (0 === Object.keys(p).length ? (b([]), a(), v(!1)) : v(!1));
            },
            [p, _, a]
          ),
            Object(n.useEffect)(
              function() {
                var e = t(c),
                  a = Object.keys(e)
                    .filter(function(e) {
                      return g.includes(e);
                    })
                    .reduce(function(t, a) {
                      return t[a] || (t[a] = e[a]), t;
                    }, {});
                m(a);
              },
              [g, c, t]
            );
          return {
            handleSubmit: function(e) {
              e.preventDefault();
              var a = t(c);
              m(a), v(!0);
            },
            handleChange: function(e) {
              s(
                Object(w.a)(
                  {},
                  c,
                  Object(D.a)({}, e.target.name, e.target.value)
                )
              );
            },
            handleBlur: function(e) {
              g.includes(e.target.name) ||
                b([].concat(Object(d.a)(g), [e.target.name]));
            },
            values: c,
            errors: p,
            isSubmitting: _,
          };
        },
        S = {
          dateToTimestamp: function(e) {
            return (
              e.setMinutes(e.getMinutes() + e.getTimezoneOffset()),
              j.firestore.Timestamp.fromDate(new Date(e))
            );
          },
          TStoFormDate: function(e) {
            var t = e.toDate();
            return (
              t.setMinutes(t.getMinutes() - t.getTimezoneOffset()),
              t.toJSON().slice(0, 10)
            );
          },
          TStoDisplayDate: function(e) {
            var t = e.toDate();
            t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
            var a = t.getFullYear(),
              n = ('0' + (t.getMonth() + 1)).slice(-2),
              r = t.toJSON().slice(8, 10);
            return ''
              .concat(n, '/')
              .concat(r, '/')
              .concat(a);
          },
          dateDiff: function(e) {
            var t = new Date(),
              a = new Date(1e3 * e.seconds);
            if (t > a) {
              var n = Math.abs(t - a) / 1e3,
                o = Math.floor(n / 86400);
              return r.a.createElement(
                'h2',
                null,
                'Overdue by ',
                o + 1,
                ' day(s)'
              );
            }
            if (!(t < a)) return null;
            var c = Math.abs(t - a) / 1e3;
            return Math.floor(c / 86400) + 1 === 0
              ? r.a.createElement('h2', null, 'Due Today')
              : void 0;
          },
        },
        O = {
          validateJobForm: function(e) {
            var t = {};
            return (
              e.name || (t.name = 'Task name is required'),
              !e.name ||
                (0 !== e.name.length && e.name.trim()) ||
                (t.name = 'Task name is required'),
              e.description || (t.description = 'Description is required'),
              !e.description ||
                (0 !== e.description.length && e.description.trim()) ||
                (t.description = 'Description is required'),
              e.total_hours || (t.total_hours = 'Total hours is required'),
              e.deadline || (t.deadline = 'Deadline is required'),
              e.deadline &&
                new Date() > new Date(e.deadline) &&
                (t.deadline = 'Deadline must be in the future'),
              t
            );
          },
          validateLogin: function(e) {
            var t = {};
            return (
              e.email || (t.email = 'Please enter your email'),
              e.password || (t.password = 'Please enter your password'),
              t
            );
          },
          validateSignup: function(e) {
            var t = {},
              a = new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
              );
            return (
              e.email || (t.email = 'Please enter your email'),
              e.email &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z].{2,}$/i.test(e.email) &&
                (t.email = 'Please enter a valid email address'),
              e.password || (t.password = 'Please enter a password'),
              e.password &&
                !a.test(e.password) &&
                (t.password =
                  'Password must be eight characters or longer and contain at least 1 lowercase, 1 uppercase, 1 numeric, and one special character'),
              e.name || (t.name = 'Please enter a username'),
              e.orgName || (t.orgName = 'Please enter an organization name'),
              t
            );
          },
          validateProjectForm: function(e) {
            var t = {};
            return (
              e.name || (t.name = 'Project name is required'),
              !e.name ||
                (0 !== e.name.length && e.name.trim()) ||
                (t.name = 'Project name is required'),
              e.description || (t.description = 'Description is required'),
              !e.description ||
                (0 !== e.description.length && e.description.trim()) ||
                (t.description = 'Description is required'),
              e.deadline || (t.deadline = 'Deadline is required'),
              e.deadline &&
                Math.floor(Date.now() / 1e3) >
                  S.dateToTimestamp(new Date(e.deadline)).seconds &&
                (t.deadline = 'Deadline must be in the future'),
              t
            );
          },
          validateWorkerEditForm: function(e) {
            var t = {};
            return (
              e.note || (t.note = 'A note is required'),
              !e.note ||
                (0 !== e.note.length && e.note.trim()) ||
                (t.note = 'Description is required'),
              t
            );
          },
        },
        F = a(15),
        T = a(32),
        J = a.n(T);
      a(106);
      function B(e) {
        var t = e.className,
          a = Object(F.a)(e, ['className']);
        return r.a.createElement(
          'label',
          Object.assign({ className: J()('Label', t) }, a)
        );
      }
      var I = r.a.forwardRef(function(e, t) {
        var a = e.className,
          n = Object(F.a)(e, ['className']);
        return r.a.createElement(
          'input',
          Object.assign({ className: J()('Input', a), type: 'text', ref: t }, n)
        );
      });
      function L(e) {
        var t = e.className,
          a = Object(F.a)(e, ['className']);
        return r.a.createElement(
          'textarea',
          Object.assign({ className: J()('Textarea', t) }, a)
        );
      }
      var A = a(90),
        U = a(6),
        M = a.n(U),
        z = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(f.a)(
                this,
                Object(g.a)(t).call(this, e)
              )).handleChange = function(e) {
                a.setState({ selectedOption: e }), a.props.setSelected(e);
              }),
              (a.populateOptions = function(e) {
                var t = [];
                return (
                  e.map(function(e) {
                    var a = { value: e, label: e };
                    return t.push(a);
                  }),
                  t
                );
              }),
              (a.state = { selectedOption: null, employees: [] }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e;
                  return p.a.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((e = []), !this.props.pm)) {
                              t.next = 4;
                              break;
                            }
                            return (
                              (t.next = 4),
                              p.a.awrap(
                                y
                                  .getProjectManagers(
                                    this.context.currentUser.org
                                  )
                                  .then(function(t) {
                                    t.forEach(function(t) {
                                      e.push(t.data().name);
                                    });
                                  })
                                  .catch(function(e) {
                                    console.warn(e),
                                      M.a.fire({
                                        title: 'Error!',
                                        text:
                                          'There was an issue - please refresh the page and try again.',
                                        icon: 'error',
                                        confirmButtonText: 'Close',
                                      });
                                  })
                              )
                            );
                          case 4:
                            if (this.props.pm) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (t.next = 7),
                              p.a.awrap(
                                y
                                  .getEmployees(this.context.currentUser.org)
                                  .then(function(t) {
                                    t.forEach(function(t) {
                                      e.push(t.data().name);
                                    });
                                  })
                                  .catch(function(e) {
                                    console.warn(e),
                                      M.a.fire({
                                        title: 'Error!',
                                        text:
                                          'There was an issue - please refresh the page and try again.',
                                        icon: 'error',
                                        confirmButtonText: 'Close',
                                      });
                                  })
                              )
                            );
                          case 7:
                            this.setState({ employees: e }),
                              this.props.defaultValue &&
                                (this.setState({
                                  selectedOption: this.props.defaultValue,
                                }),
                                this.props.setSelected(
                                  this.props.defaultValue
                                ));
                          case 9:
                          case 'end':
                            return t.stop();
                        }
                    },
                    null,
                    this
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.selectedOption,
                    a = e.employees;
                  return r.a.createElement(A.a, {
                    className: 'select',
                    value: t,
                    onChange: this.handleChange,
                    options: this.populateOptions(a),
                    isMulti: !!this.props.isMulti,
                    isSearchable: !0,
                    defaultValue:
                      !!this.props.defaultValue && this.props.defaultValue,
                    placeholder: this.props.placeholder
                      ? this.props.placeholder
                      : 'Select...',
                  });
                },
              },
            ]),
            t
          );
        })(n.Component);
      z.contextType = _;
      var H = function(e) {
          var t = Object(n.useState)(!1),
            a = Object(i.a)(t, 2),
            o = a[0],
            c = a[1],
            s = e.proj,
            l = Object(n.useState)(0),
            u = Object(i.a)(l, 2),
            d = u[0],
            m = u[1],
            h = {
              name: s ? s.name : '',
              description: s ? s.description : '',
              deadline: s ? S.TStoFormDate(e.proj.deadline) : '',
            },
            f = C(h, O.validateProjectForm, function() {
              var t, a, n, r, o, s;
              return p.a.async(
                function(i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        if (
                          ((t = E.name),
                          (a = E.description),
                          (n = E.deadline),
                          (r = null),
                          e.proj && (r = e.proj.id),
                          (o = {
                            alert: !0,
                            name: t,
                            description: a,
                            project_manager: d.value || 'Unassigned',
                            deadline: S.dateToTimestamp(new Date(n)),
                            date_created: S.dateToTimestamp(new Date()),
                            org_id: e.org,
                            progress: 0,
                            project_workers: [],
                            id: r,
                          }),
                          (i.prev = 4),
                          e.proj)
                        ) {
                          i.next = 14;
                          break;
                        }
                        return (i.next = 8), p.a.awrap(y.addProject(o));
                      case 8:
                        return (
                          (s = i.sent),
                          (i.next = 11),
                          p.a.awrap(y.setProjId(s.id, o.org_id))
                        );
                      case 11:
                        e.addToProjState(Object(w.a)({}, o, { id: s.id })),
                          (i.next = 19);
                        break;
                      case 14:
                        return (
                          (o.alert = !1),
                          (i.next = 17),
                          p.a.awrap(y.updateProject(o))
                        );
                      case 17:
                        e.updateProjInState(Object(w.a)({}, o)), e.toggleForm();
                      case 19:
                        i.next = 24;
                        break;
                      case 21:
                        (i.prev = 21),
                          (i.t0 = i.catch(4)),
                          M.a.fire({
                            title: 'Error!',
                            text: 'Project failed to post!',
                            icon: 'error',
                            confirmButtonText: 'Close',
                            onClose: c(!0),
                          });
                      case 24:
                      case 'end':
                        return i.stop();
                    }
                },
                null,
                null,
                [[4, 21]]
              );
            }),
            g = f.handleSubmit,
            b = f.handleChange,
            j = f.handleBlur,
            E = f.values,
            _ = f.errors;
          return o
            ? null
            : r.a.createElement(
                'form',
                { className: 'Form', onSubmit: g },
                r.a.createElement(
                  'legend',
                  null,
                  e.proj ? 'Update Project' : 'New Project'
                ),
                _.name &&
                  r.a.createElement('span', { className: 'error' }, _.name),
                r.a.createElement(B, { htmlFor: 'project_name' }, 'Name'),
                r.a.createElement(I, {
                  name: 'name',
                  id: 'project_name',
                  'test-id': 'project_name',
                  type: 'text',
                  placeholder: 'Project Name',
                  onChange: b,
                  value: E.name,
                  onBlur: j,
                  required: !0,
                }),
                _.description &&
                  r.a.createElement(
                    'span',
                    { className: 'error' },
                    _.description
                  ),
                r.a.createElement(
                  B,
                  { htmlFor: 'project_description' },
                  'Description'
                ),
                r.a.createElement(L, {
                  name: 'description',
                  id: 'project_description',
                  'test-id': 'project_desc',
                  type: 'text',
                  placeholder: 'Project Description',
                  onChange: b,
                  value: E.description,
                  onBlur: j,
                }),
                r.a.createElement(
                  B,
                  { htmlFor: 'project_manager' },
                  'Project Manager'
                ),
                r.a.createElement(z, {
                  id: 'project_manager',
                  'test-id': 'project_man',
                  pm: !0,
                  isMulti: !1,
                  setSelected: m,
                  defaultValue: s && {
                    value: 'project_manager',
                    label: s.project_manager,
                  },
                }),
                _.deadline &&
                  r.a.createElement('span', { className: 'error' }, _.deadline),
                r.a.createElement(
                  B,
                  { htmlFor: 'project_deadline' },
                  'Deadline'
                ),
                r.a.createElement('input', {
                  name: 'deadline',
                  id: 'project_deadline',
                  'test-id': 'project_deadline',
                  type: 'date',
                  onChange: b,
                  value: E.deadline,
                  onBlur: j,
                }),
                r.a.createElement(
                  'button',
                  {
                    'test-id': 'project-submit',
                    className: 'btn_highlight_color',
                    type: 'submit',
                  },
                  'Submit'
                ),
                r.a.createElement(
                  'button',
                  { className: 'btn_secondary_color', onClick: e.toggleForm },
                  'Cancel'
                )
              );
        },
        q = a(17),
        W = a(16),
        Y = a(26),
        R = {
          delete: r.a.createElement(q.a, {
            className: 'fa_trash',
            icon: 'trash-alt',
          }),
          requestEdit: r.a.createElement(q.a, {
            className: 'fa_user_edit',
            icon: 'user-edit',
          }),
          revise: r.a.createElement(q.a, {
            className: 'fa_clipboard_list',
            icon: 'clipboard-list',
          }),
          submit: r.a.createElement(q.a, {
            className: 'fa_arrow_up',
            icon: Y.a,
          }),
          clock: r.a.createElement(q.a, { className: 'fa_clock', icon: Y.d }),
          left: r.a.createElement(q.a, {
            className: 'fa_angle_left',
            icon: 'angle-left',
          }),
          collapse: r.a.createElement(q.a, {
            className: 'fa_angle_right',
            icon: 'angle-right',
          }),
          complete: r.a.createElement(q.a, {
            className: 'fa_calendar_check',
            icon: Y.b,
          }),
          approve: r.a.createElement(q.a, {
            className: 'fa_check_square',
            icon: Y.c,
          }),
          close: r.a.createElement(q.a, { className: 'fa_close', icon: W.j }),
          plus: r.a.createElement(q.a, { className: 'fa_plus', icon: W.i }),
          minus: r.a.createElement(q.a, { className: 'fa_minus', icon: W.h }),
          expand: r.a.createElement(q.a, {
            className: 'fa_expand',
            icon: 'angle-down',
          }),
          edit: r.a.createElement(q.a, { className: 'fa_edit', icon: 'edit' }),
          collapseBig: r.a.createElement(q.a, { icon: 'chevron-up' }),
          expandBig: r.a.createElement(q.a, { icon: 'chevron-down' }),
          default: null,
        };
      function V(e) {
        var t = e.style;
        return R[void 0 === t ? 'default' : t];
      }
      a(111);
      var Z = function(e) {
          var t = Object(n.useState)([]),
            a = Object(i.a)(t, 2),
            o = a[0],
            c = a[1],
            l = Object(n.useState)([]),
            u = Object(i.a)(l, 2),
            d = u[0],
            m = u[1],
            h = Object(n.useState)([]),
            f = Object(i.a)(h, 2),
            g = f[0],
            b = f[1],
            j = Object(n.useState)(!1),
            E = Object(i.a)(j, 2),
            w = E[0],
            v = E[1],
            x = Object(n.useState)(!1),
            k = Object(i.a)(x, 2),
            P = k[0],
            N = k[1],
            D = Object(n.useContext)(_).currentUser;
          !0 === w && v(!1);
          var C = function(e) {
            v(!0);
            var t = [];
            return (
              g.includes(e)
                ? ((t = g.filter(function(t) {
                    return t !== e;
                  })),
                  b(t))
                : ((t = g).push(e), b(t)),
              g
            );
          };
          Object(n.useEffect)(function() {
            (function() {
              var e;
              return p.a.async(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = []),
                          (t.prev = 1),
                          (t.next = 4),
                          p.a.awrap(
                            y.getEmployees(D.org).then(function(t) {
                              return (
                                t.forEach(function(t) {
                                  e.push(t.data());
                                }),
                                e
                              );
                            })
                          )
                        );
                      case 4:
                        return t.abrupt('return', t.sent);
                      case 7:
                        (t.prev = 7),
                          (t.t0 = t.catch(1)),
                          M.a.fire({
                            title: 'Error!',
                            text:
                              'Employees failed to load. Sidebar temporarily disabled.',
                            icon: 'error',
                            confirmButtonText: 'Close',
                            onClose: N(!0),
                          });
                      case 10:
                      case 'end':
                        return t.stop();
                    }
                },
                null,
                null,
                [[1, 7]]
              );
            })().then(function(e) {
              c(e);
            }),
              (function() {
                var e;
                return p.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e = []),
                            (t.prev = 1),
                            (t.next = 4),
                            p.a.awrap(
                              y.getProjectManagers(D.org).then(function(t) {
                                return (
                                  t.forEach(function(t) {
                                    e.push(t.data());
                                  }),
                                  e
                                );
                              })
                            )
                          );
                        case 4:
                          return t.abrupt('return', t.sent);
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(1)),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'Employees failed to load. Sidebar temporarily disabled.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                              onClose: N(!0),
                            });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  [[1, 7]]
                );
              })().then(function(e) {
                m(e);
              });
          }, []);
          return P
            ? null
            : r.a.createElement(
                'div',
                { className: 'Sidebar' },
                r.a.createElement(
                  'h3',
                  null,
                  r.a.createElement(
                    'div',
                    {
                      className: 'Sidebar__PM_header',
                      onClick: function() {
                        return C('pm');
                      },
                    },
                    V({
                      style: ''.concat(
                        g.includes('pm') ? 'collapse' : 'expand'
                      ),
                    }),
                    'Project Managers'
                  )
                ),
                g.includes('pm')
                  ? r.a.createElement(r.a.Fragment, null)
                  : r.a.createElement(
                      'ul',
                      { className: 'Sidebar__list' },
                      d.map(function(e, t) {
                        return r.a.createElement(
                          'li',
                          { key: e.name + t },
                          r.a.createElement(
                            s.b,
                            { to: '/profile/'.concat(e.email) },
                            e.name
                          )
                        );
                      })
                    ),
                r.a.createElement(
                  'h3',
                  null,
                  r.a.createElement(
                    'div',
                    {
                      className: 'Sidebar__emp_header',
                      onClick: function() {
                        return C('employees');
                      },
                    },
                    V({
                      style: ''.concat(
                        g.includes('employees') ? 'collapse' : 'expand'
                      ),
                    }),
                    'Employees'
                  )
                ),
                g.includes('employees')
                  ? r.a.createElement(r.a.Fragment, null)
                  : r.a.createElement(
                      'ul',
                      { className: 'Sidebar__list' },
                      o.map(function(e, t) {
                        return r.a.createElement(
                          'li',
                          { key: e.name + t },
                          r.a.createElement(
                            s.b,
                            { to: '/profile/'.concat(e.email) },
                            e.name
                          )
                        );
                      })
                    )
              );
        },
        G =
          (a(114),
          function(e) {
            return r.a.createElement(
              'div',
              { className: 'ProgressBar__meter' },
              r.a.createElement('span', {
                className: 'ProgressBar__fill',
                style: { width: e.percentage + '%' },
              }),
              r.a.createElement(
                'span',
                { className: 'ProgressBar__text' },
                e.percentage,
                '%'
              )
            );
          }),
        K = a(48),
        $ = a.n(K),
        Q =
          (a(126),
          function(e) {
            var t = Object(n.useState)(!1),
              a = Object(i.a)(t, 2),
              o = a[0],
              c = a[1],
              l = function() {
                c(!o);
              };
            return r.a.createElement(
              'div',
              { className: 'ProjectBar__project_container' },
              r.a.createElement(
                s.b,
                {
                  className: 'ProjectBar__link_wrapper',
                  to: '/project/'.concat(e.proj.id),
                  key: e.proj.id,
                },
                r.a.createElement(
                  'div',
                  { className: 'ProjectBar__header' },
                  r.a.createElement(
                    'span',
                    {
                      className: 'ProjectBar__proj_name',
                      'test-id': 'project-link',
                    },
                    e.proj.name
                  ),
                  r.a.createElement(
                    'span',
                    { className: 'ProjectBar__proj_mgr' },
                    'Manager: ',
                    e.proj.project_manager
                  )
                ),
                r.a.createElement(
                  'div',
                  { className: 'ProjectBar__description' },
                  r.a.createElement('span', null, 'Description:'),
                  r.a.createElement(
                    'div',
                    { className: 'ProjectBar__description_text' },
                    e.proj.description
                  )
                ),
                r.a.createElement(
                  'div',
                  { className: 'ProjectBar__proj_prog_date' },
                  e.proj.date_completed
                    ? r.a.createElement(
                        'p',
                        null,
                        'Project Completed on',
                        ' ',
                        e.proj.date_completed &&
                          S.TStoDisplayDate(e.proj.date_completed)
                      )
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          'div',
                          { className: 'ProjectBar__proj_prog' },
                          'Est. Progress ',
                          r.a.createElement(G, { percentage: e.proj.progress })
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'ProjectBar__deadline' },
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(
                              'span',
                              { className: 'ProjectBar__deadline_first' },
                              'Deadline:'
                            ),
                            r.a.createElement(
                              'span',
                              { className: 'ProjectBar__deadline_second' },
                              S.TStoDisplayDate(e.proj.deadline)
                            )
                          ),
                          r.a.createElement(
                            'span',
                            { className: 'ProjectBar__overdue' },
                            100 !== e.proj.progress &&
                              S.dateDiff(e.proj.deadline) &&
                              S.dateDiff(e.proj.deadline)
                          )
                        )
                      )
                )
              ),
              'project worker' !== e.role &&
                r.a.createElement(
                  'div',
                  { className: 'ProjectBar__buttons' },
                  r.a.createElement(
                    'div',
                    {
                      className: 'ProjectBar__fa',
                      'data-tip': 'Delete Project',
                      onClick: function() {
                        M.a
                          .fire({
                            title: 'Are you sure?',
                            text:
                              'By clicking the button below, you will be deleting this project and all associated tasks.',
                            icon: 'question',
                            confirmButtonText: "I'm sure!",
                            showCancelButton: !0,
                          })
                          .then(function(t) {
                            if ('cancel' === t.dismiss) return null;
                            var a = e.proj.id,
                              n = e.proj.org_id,
                              r = e.proj.date_completed;
                            'project' === e.view && y.deleteProjectById(a, n),
                              'dashboard' === e.view &&
                                y.deleteProjectById(a, n).then(function() {
                                  r
                                    ? e.deleteProjInState(a, 'complete')
                                    : e.deleteProjInState(a, 'incomplete');
                                });
                          });
                      },
                    },
                    V({ style: 'delete' })
                  ),
                  'owner' === e.role &&
                    r.a.createElement(
                      'div',
                      {
                        className: 'ProjectBar__fa',
                        onClick: l,
                        'data-tip': 'Edit Project',
                      },
                      V({ style: 'edit' })
                    ),
                  e.proj.date_completed
                    ? r.a.createElement(r.a.Fragment, null)
                    : r.a.createElement(
                        'div',
                        null,
                        e.proj.autoComplete || 100 === e.proj.progress
                          ? r.a.createElement(
                              'div',
                              {
                                className: 'ProjectBar__fa',
                                onClick: function() {
                                  var t;
                                  return p.a.async(function(a) {
                                    for (;;)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          return (
                                            ((t = Object(w.a)({}, e.proj, {
                                              date_completed: null,
                                            })).date_completed = S.dateToTimestamp(
                                              new Date()
                                            )),
                                            (t.alert = !0),
                                            (a.next = 5),
                                            p.a.awrap(y.updateProject(t))
                                          );
                                        case 5:
                                          window.location.href.includes(
                                            'dashboard'
                                          ) && e.updateProjInState(t);
                                        case 6:
                                        case 'end':
                                          return a.stop();
                                      }
                                  });
                                },
                                'data-tip': 'Approve Project',
                              },
                              V({ style: 'approve' })
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                'div',
                                {
                                  className: 'ProjectBar__fa',
                                  onClick: function() {
                                    M.a
                                      .fire({
                                        title: 'Are you sure?',
                                        text:
                                          'By clicking the button below, you will automatically mark this project as complete along with any unfinished tasks.',
                                        icon: 'question',
                                        confirmButtonText: "I'm sure!",
                                        showCancelButton: !0,
                                      })
                                      .then(function(t) {
                                        if ('cancel' === t.dismiss) return null;
                                        var a = e.proj;
                                        (a.autoComplete = !0),
                                          (a.alert = !0),
                                          (a.date_completed = S.dateToTimestamp(
                                            new Date()
                                          )),
                                          y.updateProject(a),
                                          window.location.href.includes(
                                            'dashboard'
                                          ) && e.updateProjInState(a);
                                      });
                                  },
                                  'data-tip': 'Mark Complete',
                                },
                                V({ style: 'complete' })
                              )
                            )
                      )
                ),
              o &&
                r.a.createElement(H, {
                  org: e.proj.org_id,
                  updateProjInState: e.updateProjInState,
                  toggleForm: l,
                  proj: e.proj,
                }),
              r.a.createElement($.a, {
                place: 'bottom',
                type: 'dark',
                effect: 'float',
              })
            );
          }),
        X =
          (a(127),
          (function(e) {
            function t() {
              var e, a;
              Object(m.a)(this, t);
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((a = Object(f.a)(
                  this,
                  (e = Object(g.a)(t)).call.apply(e, [this].concat(r))
                )).state = {
                  user: { id: null, name: null, org: null, role: null },
                  projects: [],
                  projectManagers: [],
                  loading: !0,
                  expandProjects: !0,
                  expandCompleteProjects: !1,
                  expandPersonnel: !0,
                  newProj: !1,
                  error: !1,
                }),
                (a.errorClose = function() {
                  a.setState({ error: !0 });
                }),
                (a.toggleExpandProjects = function(e) {
                  e.stopPropagation(),
                    a.setState({ expandProjects: !a.state.expandProjects });
                }),
                (a.toggleExpandCompleteProjects = function(e) {
                  e.stopPropagation(),
                    a.setState({
                      expandCompleteProjects: !a.state.expandCompleteProjects,
                    });
                }),
                (a.toggleExpandPersonnel = function(e) {
                  e.stopPropagation(),
                    a.setState({ expandPersonnel: !a.state.expandPersonnel });
                }),
                (a.toggleNewProj = function(e) {
                  e.stopPropagation(),
                    a.state.newProj
                      ? a.setState({ newProj: !1, expandProjects: !0 })
                      : a.setState({ newProj: !0, expandProjects: !1 });
                }),
                (a.addToProjState = function(e) {
                  return a.setState({
                    projects: [].concat(Object(d.a)(a.state.projects), [e]),
                    newProj: !1,
                    expandProjects: !0,
                  });
                }),
                (a.updateProjInState = function(e) {
                  var t = a.state.projects,
                    n = a.state.completeProjects,
                    r = t.filter(function(t) {
                      return t.id !== e.id;
                    });
                  n.push(e), a.setState({ projects: r, completeProjects: n });
                }),
                (a.deleteProjInState = function(e, t) {
                  if ('incomplete' === t) {
                    var n = a.state.projects;
                    (n = n.filter(function(t) {
                      return t.id !== e;
                    })),
                      a.setState({ projects: n });
                  }
                  if ('complete' === t) {
                    var r = a.state.completeProjects;
                    (r = r.filter(function(t) {
                      return t.id !== e;
                    })),
                      a.setState({ completeProjects: r });
                  }
                }),
                (a.updatePM = function(e, t) {
                  var n = a.state.projects;
                  n.map(function(a) {
                    return a.id === e && (a.project_manager = t), a;
                  }),
                    a.setState({ projects: n });
                }),
                a
              );
            }
            return (
              Object(b.a)(t, e),
              Object(h.a)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e, t, a, n, r, o, c;
                    return p.a.async(
                      function(s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                (e = this.context.currentUser.email),
                                (t = this.context.currentUser.org),
                                (a = this.context.currentUser.name),
                                (n = this.context.currentUser.role),
                                (r = []),
                                (s.prev = 5),
                                (s.next = 8),
                                p.a.awrap(y.initDashboard(a, n, t))
                              );
                            case 8:
                              (r = s.sent),
                                (o = []),
                                (c = []),
                                r.projects.map(function(e, t) {
                                  return e.date_completed || e.autoComplete
                                    ? o.push(e)
                                    : c.push(e);
                                }),
                                c.sort(function(e, t) {
                                  return (
                                    e.deadline.seconds - t.deadline.seconds
                                  );
                                }),
                                this.setState({
                                  user: { id: e, name: a, org: t, role: n },
                                  projects: c,
                                  completeProjects: o,
                                  projectManagers: r.project_managers,
                                  loading: !1,
                                }),
                                (s.next = 19);
                              break;
                            case 16:
                              (s.prev = 16),
                                (s.t0 = s.catch(5)),
                                M.a.fire({
                                  title: 'Error!',
                                  text:
                                    'Dashboard failed to load. Please try again.',
                                  icon: 'error',
                                  confirmButtonText: 'Close',
                                  onClose: this.errorClose(),
                                });
                            case 19:
                            case 'end':
                              return s.stop();
                          }
                      },
                      null,
                      this,
                      [[5, 16]]
                    );
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return this.state.error
                      ? r.a.createElement('body', {
                          alt: 'something terrible happened',
                          background:
                            'https://media.giphy.com/media/jWexOOlYe241y/giphy.gif',
                        })
                      : this.state.loading
                      ? r.a.createElement(N, null)
                      : r.a.createElement(
                          'section',
                          { className: 'Dashboard__container' },
                          r.a.createElement(
                            'div',
                            { className: 'App__org_header' },
                            r.a.createElement('h2', null, this.state.user.org),
                            r.a.createElement(
                              'span',
                              { className: 'Dashboard__date' },
                              new Date().toDateString()
                            )
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'Dashboard__main' },
                            r.a.createElement(
                              'section',
                              { className: 'Dashboard__projects' },
                              r.a.createElement(
                                'div',
                                {
                                  className: 'App__section_header',
                                  onClick: this.toggleExpandProjects,
                                  'test-id': 'dash-header',
                                },
                                r.a.createElement(
                                  'div',
                                  { className: 'App__fa_h1' },
                                  V({
                                    style: ''.concat(
                                      this.state.expandProjects
                                        ? 'minus'
                                        : 'plus'
                                    ),
                                  }),
                                  r.a.createElement('h1', null, 'Projects')
                                ),
                                'project worker' !== this.state.user.role &&
                                  r.a.createElement(
                                    'button',
                                    {
                                      className: 'Dashboard__new',
                                      onClick: this.toggleNewProj,
                                      'test-id': 'new-project',
                                    },
                                    'New'
                                  )
                              ),
                              this.state.newProj &&
                                r.a.createElement(H, {
                                  org: this.state.user.org,
                                  addToProjState: this.addToProjState,
                                  toggleForm: this.toggleNewProj,
                                }),
                              this.state.expandProjects &&
                                r.a.createElement(
                                  'div',
                                  {
                                    className: 'Dashboard__projects_container',
                                  },
                                  0 !== this.state.projects.length
                                    ? r.a.createElement(
                                        'ul',
                                        { className: 'Dashboard__list' },
                                        this.state.projects.map(function(t) {
                                          return r.a.createElement(
                                            'li',
                                            { key: t.id },
                                            r.a.createElement(Q, {
                                              proj: t,
                                              role: e.state.user.role,
                                              projectManagers:
                                                e.state.projectManagers,
                                              updatePM: e.updatePM,
                                              updateProjInState:
                                                e.updateProjInState,
                                              deleteProjInState:
                                                e.deleteProjInState,
                                              view: 'dashboard',
                                            })
                                          );
                                        })
                                      )
                                    : r.a.createElement(
                                        'div',
                                        { className: 'Dashboard__no_projects' },
                                        r.a.createElement(
                                          'span',
                                          { className: 'Dashboard__welcome' },
                                          'Welcome!'
                                        ),
                                        'project worker' !==
                                          this.state.user.role
                                          ? r.a.createElement(
                                              'span',
                                              null,
                                              'You currently have no projects, click the NEW button above to add one.'
                                            )
                                          : r.a.createElement(
                                              'span',
                                              null,
                                              'You are not currently assigned to any projects.'
                                            )
                                      )
                                ),
                              r.a.createElement(
                                'div',
                                {
                                  className:
                                    'App__section_header  App__separate_top_always',
                                  onClick: this.toggleExpandCompleteProjects,
                                },
                                r.a.createElement(
                                  'div',
                                  { className: 'App__fa_h1' },
                                  V({
                                    style: ''.concat(
                                      this.state.expandCompleteProjects
                                        ? 'minus'
                                        : 'plus'
                                    ),
                                  }),
                                  r.a.createElement(
                                    'h1',
                                    null,
                                    'Completed Projects'
                                  )
                                )
                              ),
                              this.state.expandCompleteProjects &&
                                r.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'Dashboard__projects_container App__separate_bottom',
                                  },
                                  0 !== this.state.completeProjects.length
                                    ? r.a.createElement(
                                        'ul',
                                        { className: 'Dashboard__list' },
                                        this.state.completeProjects.map(
                                          function(t) {
                                            return r.a.createElement(
                                              'li',
                                              { key: t.id },
                                              r.a.createElement(Q, {
                                                proj: t,
                                                role: e.state.user.role,
                                                projectManagers:
                                                  e.state.projectManagers,
                                                updatePM: e.updatePM,
                                                updateProjInState:
                                                  e.updateProjInState,
                                                deleteProjInState:
                                                  e.deleteProjInState,
                                                view: 'dashboard',
                                              })
                                            );
                                          }
                                        )
                                      )
                                    : r.a.createElement(
                                        'div',
                                        { className: 'Dashboard__no_projects' },
                                        r.a.createElement(
                                          'span',
                                          null,
                                          'You currently have no complete projects. Time to get to work!'
                                        )
                                      )
                                )
                            ),
                            r.a.createElement(
                              'section',
                              {
                                className:
                                  'App__personnel App__separate_top App__separate_bottom',
                              },
                              r.a.createElement(
                                'div',
                                {
                                  className: 'App__section_header',
                                  onClick: this.toggleExpandPersonnel,
                                },
                                r.a.createElement(
                                  'div',
                                  { className: 'App__fa_h1' },
                                  V({
                                    style: ''.concat(
                                      this.state.expandPersonnel
                                        ? 'minus'
                                        : 'plus'
                                    ),
                                  }),
                                  r.a.createElement('h1', null, 'Personnel')
                                )
                              ),
                              this.state.expandPersonnel &&
                                r.a.createElement(Z, null)
                            )
                          )
                        );
                  },
                },
              ]),
              t
            );
          })(n.Component));
      X.contextType = _;
      var ee = a(87),
        te = a.n(ee),
        ae =
          (a(128),
          a(129),
          function(e) {
            var t = Object(n.useState)(0),
              a = Object(i.a)(t, 2),
              o = a[0],
              c = a[1],
              s = Object(n.useContext)(_).currentUser,
              l = {
                name: e.job ? e.job.name : '',
                description: e.job ? e.job.description : '',
                deadline: e.job ? S.TStoFormDate(e.job.deadline) : '',
                total_hours: e.job ? e.job.total_hours : '',
              },
              u = C(l, O.validateJobForm, function(t) {
                var a, n, r, c, i, l, u, d, m, h, g, b, j, E, _, w, v, x;
                return p.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a = f.name),
                            (n = f.description),
                            (r = f.total_hours),
                            (c = f.deadline),
                            (i = e.job
                              ? [e.job.project_manager]
                              : [e.project.project_manager]),
                            o &&
                              o.map(function(e) {
                                return (
                                  e.value !== i[0] && i.push(e.value),
                                  'submitted'
                                );
                              }),
                            (l = e.job ? e.job.project_id : e.projectId),
                            (u = e.job
                              ? e.job.project_manager
                              : e.project.project_manager),
                            (d = e.job ? e.job.id : null),
                            (m = !!e.job && e.job.approval),
                            (h = e.job ? e.job.date_created : new Date()),
                            (g = e.job ? e.job.hours_completed : 0),
                            (b = 'in progress'),
                            null,
                            (j = []),
                            (E = e.job
                              ? e.job.employee_hours
                              : [
                                  { name: e.project.project_manager, hours: 0 },
                                ]),
                            e.job
                              ? ((b =
                                  'edit request' === e.job.status
                                    ? 'in progress'
                                    : e.job.status),
                                i.map(function(t) {
                                  return e.job.project_workers.includes(t)
                                    ? null
                                    : j.push(t);
                                }),
                                i.forEach(function(t) {
                                  return e.job.employee_hours.find(function(e) {
                                    return e.name === t;
                                  })
                                    ? null
                                    : E.push({ name: t, hours: 0 });
                                }))
                              : (i.map(function(e) {
                                  return j.push(e);
                                }),
                                i.forEach(function(t) {
                                  t !== e.project.project_manager &&
                                    E.push({ name: t, hours: 0 });
                                })),
                            (_ = {
                              approval: m,
                              date_created: h,
                              deadline: S.dateToTimestamp(new Date(c)),
                              description: n,
                              name: a,
                              organization: s.org,
                              total_hours: r,
                              hours_completed: g,
                              project_id: l,
                              project_manager: u,
                              project_workers: i,
                              status: b,
                              id: d,
                              edit: null,
                              alert: j,
                              employee_hours: E,
                            }),
                            !e.job)
                          ) {
                            t.next = 27;
                            break;
                          }
                          return (
                            (t.prev = 16),
                            (t.next = 19),
                            p.a.awrap(y.editJob(d, _))
                          );
                        case 19:
                          t.next = 25;
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t0 = t.catch(16)),
                            console.warn(t.t0),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue editing this task - please refresh the page and try again. 1',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 25:
                          t.next = 36;
                          break;
                        case 27:
                          return (
                            (t.prev = 27),
                            (t.next = 30),
                            p.a.awrap(y.addJob(_, l))
                          );
                        case 30:
                          t.next = 36;
                          break;
                        case 32:
                          (t.prev = 32),
                            (t.t1 = t.catch(27)),
                            console.warn(t.t1),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue - please refresh the page and try again. 2',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 36:
                          if (((w = null), !e.job)) {
                            t.next = 52;
                            break;
                          }
                          return (
                            (v = []),
                            (t.prev = 39),
                            (t.next = 42),
                            p.a.awrap(
                              y
                                .getProjectById(e.job.project_id, s.org)
                                .then(function(e) {
                                  return v.push(e.data());
                                })
                            )
                          );
                        case 42:
                          t.next = 48;
                          break;
                        case 44:
                          (t.prev = 44),
                            (t.t2 = t.catch(39)),
                            console.warn(t.t2),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue - please refresh the page and try again.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 48:
                          (x = v[0]), (w = x.project_workers), (t.next = 53);
                          break;
                        case 52:
                          w = e.project.project_workers;
                        case 53:
                          return (
                            _.project_workers.map(function(e) {
                              return w.includes(e) ? null : w.push(e);
                            }),
                            (t.prev = 54),
                            (t.next = 57),
                            p.a.awrap(
                              y
                                .updateProjectWorkers(l, w, s.org)
                                .then(function() {
                                  e.showJobForm();
                                })
                            )
                          );
                        case 57:
                          t.next = 63;
                          break;
                        case 59:
                          (t.prev = 59),
                            (t.t3 = t.catch(54)),
                            console.warn(t.t3),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue assigning employees to this project - please refresh the page and try again.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 63:
                        case 'end':
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  [
                    [16, 21],
                    [27, 32],
                    [39, 44],
                    [54, 59],
                  ]
                );
              }),
              d = u.handleSubmit,
              m = u.handleChange,
              h = u.handleBlur,
              f = u.values,
              g = u.errors,
              b = u.isSubmitting;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'form',
                { onSubmit: d, className: 'Form' },
                r.a.createElement(
                  'legend',
                  null,
                  e.projectId ? 'Add New Task' : 'Edit Task'
                ),
                r.a.createElement(
                  'div',
                  { className: 'input' },
                  r.a.createElement(B, { htmlFor: 'name' }, 'Task Name: '),
                  r.a.createElement(I, {
                    type: 'text',
                    name: 'name',
                    id: 'name',
                    'test-id': 'task-name',
                    onChange: m,
                    value: f.name,
                    onBlur: h,
                  }),
                  g.name && r.a.createElement('p', null, '*', g.name)
                ),
                r.a.createElement(
                  'div',
                  { className: 'input' },
                  r.a.createElement(B, { htmlFor: 'description' }, 'Details: '),
                  r.a.createElement(L, {
                    name: 'description',
                    id: 'description',
                    'test-id': 'task-desc',
                    onChange: m,
                    value: f.description,
                    onBlur: h,
                  }),
                  g.description &&
                    r.a.createElement('p', null, '*', g.description)
                ),
                r.a.createElement(
                  'div',
                  { className: 'input' },
                  r.a.createElement(
                    B,
                    { htmlFor: 'total_hours' },
                    'Total Hours: '
                  ),
                  r.a.createElement('input', {
                    type: 'number',
                    name: 'total_hours',
                    id: 'total_hours',
                    'test-id': 'task-hours',
                    onChange: m,
                    value: f.total_hours,
                    onBlur: h,
                  }),
                  g.total_hours &&
                    r.a.createElement('p', null, '*', g.total_hours)
                ),
                r.a.createElement(
                  'div',
                  { className: 'input' },
                  r.a.createElement(B, { htmlFor: 'deadline' }, 'Deadline: '),
                  r.a.createElement('input', {
                    type: 'date',
                    name: 'deadline',
                    id: 'deadline',
                    'test-id': 'task-deadline',
                    onChange: m,
                    value: f.deadline,
                    onBlur: h,
                  }),
                  g.deadline && r.a.createElement('p', null, '*', g.deadline)
                ),
                r.a.createElement(z, {
                  isMulti: !0,
                  setSelected: c,
                  defaultValue: (function() {
                    if (e.job) {
                      var t = [];
                      return (
                        e.job.project_workers.forEach(function(e) {
                          return t.push({ value: e, label: e });
                        }),
                        t
                      );
                    }
                  })(),
                  placeholder: 'Assign Employees',
                }),
                r.a.createElement(
                  'button',
                  {
                    className: 'btn_highlight_color',
                    type: 'submit',
                    'test-id': 'submit-task',
                    disabled: b,
                  },
                  'Submit'
                ),
                r.a.createElement(
                  'button',
                  { className: 'btn_secondary_color', onClick: e.showJobForm },
                  'Cancel'
                )
              )
            );
          }),
        ne = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++)
              o[c] = arguments[c];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                editing: !1,
                editJob: null,
                notificationList: [],
                error: !1,
              }),
              (a.setError = function() {
                a.setState({ error: !0 });
              }),
              (a.handleApprovalSubmit = function(e, t) {
                var n,
                  r,
                  o = arguments;
                return p.a.async(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = o.length > 2 && void 0 !== o[2] && o[2]),
                            (r = o.length > 3 ? o[3] : void 0),
                            (e.prev = 2),
                            (r.approval = n),
                            ('completed' !== t && 'revisions' !== t) ||
                              (r.alert = r.project_workers),
                            'completed' === t &&
                              (r.date_completed = S.dateToTimestamp(
                                new Date()
                              )),
                            (r.status = t),
                            (e.next = 9),
                            p.a.awrap(y.updateJob(r))
                          );
                        case 9:
                          a.props.updateList(r),
                            a.setState({
                              notificationList: a.props.notificationList,
                            }),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(2)),
                            M.a.fire({
                              title: 'Error!',
                              text: 'Failed to post job update.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                              onClose: a.setError(),
                            });
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  null,
                  null,
                  [[2, 13]]
                );
              }),
              (a.handleClick = function(e, t, n) {
                var r;
                return p.a.async(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            'project manager' !== a.context.currentUser.role &&
                            'owner' !== a.context.currentUser.role
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt('return', null);
                        case 4:
                          return (
                            (e.prev = 4),
                            (r = t.alert.filter(function(e) {
                              return e !== a.context.currentUser.name;
                            })),
                            (t.alert = r),
                            (e.next = 9),
                            p.a.awrap(y.updateJobAlert(t))
                          );
                        case 9:
                          a.props.updateList(t),
                            a.props.renderList(n),
                            a.setState({
                              notificationList: a.props.notificationList,
                            }),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(4)),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'Failed to update notification status. You are being directed to the project page.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                              onClose: a.setError(),
                            });
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  null,
                  null,
                  [[4, 14]]
                );
              }),
              (a.openEdit = function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                arguments.length > 1 && arguments[1];
                null === e && a.props.updateList(a.state.editJob),
                  a.setState({
                    editing: !a.state.editing,
                    editJob: e,
                    notificationList: a.props.notificationList,
                  });
              }),
              (a.renderJobEdit = function(e) {
                return Object.keys(e.edit).map(function(t, a) {
                  return e.edit[t] && 'employee' !== t
                    ? r.a.createElement(
                        'li',
                        { key: a + t },
                        t,
                        ': ',
                        e.edit[t]
                      )
                    : r.a.createElement(r.a.Fragment, null);
                });
              }),
              (a.renderEmployeeNotificationDetails = function(e) {
                return 'in progress' === e.status
                  ? r.a.createElement(
                      'span',
                      null,
                      ' - You have been added to this job.'
                    )
                  : 'submitted' === e.status
                  ? r.a.createElement(
                      'span',
                      null,
                      ' has been submitted for review.'
                    )
                  : 'revisions' === e.status
                  ? r.a.createElement(
                      'span',
                      null,
                      ' has been returned for revisions.'
                    )
                  : 'completed' === e.status
                  ? r.a.createElement('span', null, ' has been completed!')
                  : void 0;
              }),
              (a.renderPromoted = function() {
                if (a.props.promoted)
                  return r.a.createElement(
                    'li',
                    null,
                    'You have been promoted to Project Manager!',
                    ' ',
                    r.a.createElement(
                      'div',
                      {
                        className: 'JobNotification__close',
                        onClick: function() {
                          return a.props.dismissPromoted();
                        },
                      },
                      V({ style: 'close' })
                    )
                  );
              }),
              (a.renderJobList = function() {
                return a.state.notificationList.map(function(e) {
                  return r.a.createElement(
                    'li',
                    { key: e.id, className: 'notification_job' },
                    r.a.createElement(
                      'div',
                      { className: 'JobNotification__info' },
                      r.a.createElement(
                        'span',
                        { className: 'JobNotification__job_link' },
                        r.a.createElement(
                          s.b,
                          {
                            to: { pathname: '/project/'.concat(e.project_id) },
                            onClick: function(t) {
                              return a.handleClick(e.id, e, t);
                            },
                          },
                          e.name
                        )
                      ),
                      'project worker' === a.context.currentUser.role &&
                        a.renderEmployeeNotificationDetails(e)
                    ),
                    'project worker' === a.context.currentUser.role
                      ? r.a.createElement(
                          'div',
                          {
                            className: 'JobNotification__close',
                            onClick: function(t) {
                              return a.handleClick(e.id, e, t);
                            },
                          },
                          V({ style: 'close' })
                        )
                      : r.a.createElement(r.a.Fragment, null),
                    'project manager' === a.context.currentUser.role
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          'submitted' === e.status
                            ? r.a.createElement(
                                'div',
                                { className: 'JobNotification__approval' },
                                r.a.createElement(
                                  'h5',
                                  null,
                                  'Task Submitted For Approval'
                                ),
                                r.a.createElement(
                                  'button',
                                  {
                                    className:
                                      'btn_highlight_color notification_button',
                                    onClick: function(t) {
                                      return a.handleApprovalSubmit(
                                        e.id,
                                        'completed',
                                        !0,
                                        e
                                      );
                                    },
                                  },
                                  'Approve'
                                ),
                                r.a.createElement(
                                  'button',
                                  {
                                    className:
                                      'btn_highlight_color notification_button',
                                    onClick: function(t) {
                                      return a.handleApprovalSubmit(
                                        e.id,
                                        'revisions',
                                        !1,
                                        e
                                      );
                                    },
                                  },
                                  'Request Revision'
                                )
                              )
                            : r.a.createElement(r.a.Fragment, null),
                          'edit request' === e.status
                            ? r.a.createElement(
                                'div',
                                null,
                                r.a.createElement(
                                  'ul',
                                  null,
                                  a.renderJobEdit(e)
                                ),
                                r.a.createElement(
                                  'button',
                                  {
                                    onClick: function(t) {
                                      return a.openEdit(e, t);
                                    },
                                  },
                                  'Submit Edit'
                                )
                              )
                            : r.a.createElement(r.a.Fragment, null)
                        )
                      : r.a.createElement(r.a.Fragment, null)
                  );
                });
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({
                    notificationList: this.props.notificationList,
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.state.error
                    ? null
                    : r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'ul',
                          { className: 'JobNotification__list' },
                          this.renderPromoted(),
                          this.renderJobList()
                        ),
                        this.state.editing
                          ? r.a.createElement(ae, {
                              showJobForm: this.openEdit,
                              job: this.state.editJob,
                            })
                          : r.a.createElement(r.a.Fragment, null)
                      );
                },
              },
            ]),
            t
          );
        })(n.Component);
      ne.contextType = _;
      var re = (function(e) {
        function t() {
          var e, a;
          Object(m.a)(this, t);
          for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++)
            o[c] = arguments[c];
          return (
            ((a = Object(f.a)(
              this,
              (e = Object(g.a)(t)).call.apply(e, [this].concat(o))
            )).state = {
              newEmployees: null,
              newProjects: null,
              completedProjects: null,
            }),
            (a.handleNewEmployee = function(e, t) {
              return p.a.async(
                function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (e.new = !1),
                          (n.next = 4),
                          p.a.awrap(
                            y.updateWorker(e, a.context.currentUser.org)
                          )
                        );
                      case 4:
                        a.props.updateList(e, t),
                          a.setState({ newEmployees: a.props.newEmployees }),
                          (n.next = 11);
                        break;
                      case 8:
                        (n.prev = 8),
                          (n.t0 = n.catch(0)),
                          M.a.fire({
                            title: 'Error!',
                            text: 'Employee status failed to update.',
                            icon: 'error',
                            confirmButtonText: 'Close',
                          });
                      case 11:
                      case 'end':
                        return n.stop();
                    }
                },
                null,
                null,
                [[0, 8]]
              );
            }),
            (a.handleClick = function(e, t, n) {
              return p.a.async(function(r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        n.stopPropagation(),
                        (e.alert = !1),
                        (r.next = 4),
                        p.a.awrap(
                          y
                            .updateProject(e)
                            .then(a.props.updateProjectList(e, t))
                            .then(a.props.renderList(n))
                        )
                      );
                    case 4:
                    case 'end':
                      return r.stop();
                  }
              });
            }),
            (a.renderNewEmployees = function() {
              if (a.props.newEmployees.length > 0)
                return a.props.newEmployees.map(function(e, t) {
                  return r.a.createElement(
                    'li',
                    { key: t + e },
                    r.a.createElement(
                      s.b,
                      {
                        to: '/profile/'.concat(e.email),
                        onClick: function(t) {
                          return a.handleNewEmployee(e, t);
                        },
                      },
                      e.name,
                      ' has joined your organization!'
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className: 'JobNotification__close',
                        onClick: function() {
                          return a.handleNewEmployee(e);
                        },
                      },
                      V({ style: 'close' })
                    )
                  );
                });
            }),
            (a.renderNewProjects = function() {
              if (a.props.newProjects.length > 0)
                return a.props.newProjects.map(function(e) {
                  return r.a.createElement(
                    'li',
                    { key: e.id },
                    r.a.createElement(
                      s.b,
                      {
                        onClick: function(t) {
                          return a.handleClick(e, 'new', t);
                        },
                        to: { pathname: '/project/'.concat(e.id) },
                      },
                      e.name,
                      ' has started.'
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className: 'JobNotification__close',
                        onClick: function(t) {
                          return a.handleClick(e, 'new', t);
                        },
                      },
                      V({ style: 'close' })
                    )
                  );
                });
            }),
            (a.renderCompletedProjects = function() {
              if (a.props.completedProjects.length > 0)
                return a.props.completedProjects.map(function(e) {
                  return r.a.createElement(
                    'li',
                    { key: e.id },
                    r.a.createElement(
                      s.b,
                      {
                        onClick: function(t) {
                          return a.handleClick(e, 'completed', t);
                        },
                        to: { pathname: '/project/'.concat(e.id) },
                      },
                      e.name,
                      ' has been completed!'
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className: 'JobNotification__close',
                        onClick: function(t) {
                          return a.handleClick(e, 'completed', t);
                        },
                      },
                      V({ style: 'close' })
                    )
                  );
                });
            }),
            a
          );
        }
        return (
          Object(b.a)(t, e),
          Object(h.a)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.setState({
                  newEmployees: this.props.newEmployees,
                  newProjects: this.props.newProjects,
                  completedProjects: this.props.completedProjects,
                });
              },
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  null,
                  r.a.createElement(
                    'ul',
                    { className: 'JobNotification__list' },
                    this.renderNewEmployees(),
                    this.renderNewProjects(),
                    this.renderCompletedProjects()
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      re.contextType = _;
      a(130);
      var oe = (function(e) {
        function t() {
          var e, a;
          Object(m.a)(this, t);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((a = Object(f.a)(
              this,
              (e = Object(g.a)(t)).call.apply(e, [this].concat(r))
            )).state = {
              notificationCount: 0,
              notificationList: [],
              notificationDropDown: !1,
              newEmployees: [],
              completedProjects: [],
              newProjects: [],
              error: !1,
              promoted: !1,
            }),
            (a.setError = function() {
              a.setState({ error: !0 });
            }),
            (a.getProjects = function() {
              var e;
              return p.a.async(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((e = []), 'owner' === a.context.currentUser.role)
                        ) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.prev = 2),
                          (t.next = 5),
                          p.a.awrap(
                            y
                              .getProjectsByRole(a.context.currentUser)
                              .then(function(t) {
                                t.forEach(function(t) {
                                  e.push(t.data());
                                });
                              })
                          )
                        );
                      case 5:
                        return t.abrupt('return', e);
                      case 8:
                        (t.prev = 8),
                          (t.t0 = t.catch(2)),
                          M.a.fire({
                            title: 'Error!',
                            text:
                              'Failed to fetch projects. Notifications are temporarily disabled.',
                            icon: 'error',
                            confirmButtonText: 'Close',
                            onClose: a.setError(),
                          });
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                null,
                null,
                [[2, 8]]
              );
            }),
            (a.populateNotificationList = function() {
              var e,
                t,
                n,
                r,
                o,
                c,
                s,
                i = arguments;
              return p.a.async(
                function(l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        if (
                          ((e = i.length > 0 && void 0 !== i[0] ? i[0] : null),
                          'project manager' !== a.context.currentUser.role)
                        ) {
                          l.next = 7;
                          break;
                        }
                        return (
                          (t = !1),
                          (l.next = 5),
                          p.a.awrap(
                            y
                              .getUser(
                                a.context.currentUser.email,
                                a.context.currentUser.org
                              )
                              .then(function(e) {
                                return e.forEach(function(e) {
                                  return (t = !!e.data().promoted);
                                });
                              })
                              .then(function(e) {
                                t &&
                                  a.setState({
                                    notificationCount:
                                      a.state.notificationCount + 1,
                                    promoted: !0,
                                  });
                              })
                          )
                        );
                      case 5:
                        (n = []),
                          e.map(function(e) {
                            var t;
                            return p.a.async(
                              function(r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        p.a.awrap(y.getJobs(e.org_id, e.id))
                                      );
                                    case 3:
                                      return (
                                        r.sent.forEach(function(e) {
                                          ('submitted' !== e.data().status &&
                                            'edit request' !==
                                              e.data().status) ||
                                            n.push(e.data());
                                        }),
                                        (t = a.state.promoted
                                          ? n.length + 1
                                          : n.length),
                                        a.setState({
                                          notificationList: n,
                                          notificationCount: t,
                                        }),
                                        r.abrupt('return', n)
                                      );
                                    case 10:
                                      (r.prev = 10),
                                        (r.t0 = r.catch(0)),
                                        M.a.fire({
                                          title: 'Error!',
                                          text:
                                            'Jobs failed to load. Notifications temporarily disabled.',
                                          icon: 'error',
                                          confirmButtonText: 'Close',
                                          onClose: a.setError(),
                                        });
                                    case 13:
                                    case 'end':
                                      return r.stop();
                                  }
                              },
                              null,
                              null,
                              [[0, 10]]
                            );
                          });
                      case 7:
                        if (
                          ('project worker' === a.context.currentUser.role &&
                            ((r = []),
                            e.map(function(e) {
                              return p.a.async(
                                function(t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          (t.next = 3),
                                          p.a.awrap(y.getJobs(e.org_id, e.id))
                                        );
                                      case 3:
                                        return (
                                          t.sent.forEach(function(e) {
                                            e
                                              .data()
                                              .alert.includes(
                                                a.context.currentUser.name
                                              ) && r.push(e.data());
                                          }),
                                          a.setState({
                                            notificationList: r,
                                            notificationCount: r.length,
                                          }),
                                          t.abrupt('return', r)
                                        );
                                      case 9:
                                        (t.prev = 9),
                                          (t.t0 = t.catch(0)),
                                          M.a.fire({
                                            title: 'Error!',
                                            text:
                                              'Jobs failed to load. Notifications temporarily disabled.',
                                            icon: 'error',
                                            confirmButtonText: 'Close',
                                            onClose: a.setError(),
                                          });
                                      case 12:
                                      case 'end':
                                        return t.stop();
                                    }
                                },
                                null,
                                null,
                                [[0, 9]]
                              );
                            })),
                          'owner' !== a.context.currentUser.role)
                        ) {
                          l.next = 22;
                          break;
                        }
                        return (
                          (o = []),
                          (c = []),
                          (s = []),
                          (l.prev = 12),
                          (l.next = 15),
                          p.a.awrap(
                            y
                              .getEmployees(a.context.currentUser.org)
                              .then(function(e) {
                                e.forEach(function(e) {
                                  e.data().new && o.push(e.data());
                                }),
                                  a.setState({
                                    newEmployees: o,
                                    notificationCount:
                                      a.state.notificationCount + o.length,
                                  });
                              })
                          )
                        );
                      case 15:
                        return (
                          (l.next = 17),
                          p.a.awrap(
                            y
                              .getProjectsByRole(a.context.currentUser)
                              .then(function(e) {
                                e.forEach(function(e) {
                                  !0 === e.data().alert &&
                                    e.data().date_completed &&
                                    c.push(e.data()),
                                    !0 !== e.data().alert ||
                                      e.data().date_completed ||
                                      s.push(e.data());
                                }),
                                  a.setState({
                                    newProjects: s,
                                    completedProjects: c,
                                    notificationCount:
                                      a.state.notificationCount +
                                      s.length +
                                      c.length,
                                  });
                              })
                          )
                        );
                      case 17:
                        l.next = 22;
                        break;
                      case 19:
                        (l.prev = 19),
                          (l.t0 = l.catch(12)),
                          M.a.fire({
                            title: 'Error!',
                            text:
                              'Failed to fetch projects. Notifications temporarily disabled.',
                            icon: 'error',
                            confirmButtonText: 'Close',
                            onClose: a.setError(),
                          });
                      case 22:
                      case 'end':
                        return l.stop();
                    }
                },
                null,
                null,
                [[12, 19]]
              );
            }),
            (a.renderList = function(e) {
              a.setState({
                notificationDropDown: !a.state.notificationDropDown,
              });
            }),
            (a.updateList = function(e) {
              var t = a.state.notificationList.filter(function(t) {
                return t.id !== e.id;
              });
              a.setState({
                notificationList: t,
                notificationCount: t.length,
                notificationDropDown: !a.state.notificationDropDown,
              });
            }),
            (a.updateNewEmployees = function(e) {
              var t = a.state.newEmployees.filter(function(t) {
                return t.email !== e.email;
              });
              a.setState({
                newEmployees: t,
                notificationCount: a.state.notificationCount - 1,
              });
            }),
            (a.updateProjectList = function(e, t) {
              if ('completed' === t) {
                var n = a.state.completedProjects.filter(function(t) {
                  return t.id !== e.id;
                });
                a.setState({
                  completedProjects: n,
                  notificationCount: a.state.notificationCount - 1,
                });
              } else if ('new' === t) {
                var r = a.state.newProjects.filter(function(t) {
                  return t.id !== e.id;
                });
                a.setState({
                  newProjects: r,
                  notificationCount: a.state.notificationCount - 1,
                });
              }
            }),
            (a.dismissPromoted = function() {
              a.setState({
                notificationCount: a.state.notificationCount - 1,
                promoted: !1,
              }),
                y.updatePromoted(a.context.currentUser);
            }),
            a
          );
        }
        return (
          Object(b.a)(t, e),
          Object(h.a)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                return p.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            'project worker' !==
                              this.context.currentUser.role &&
                            'project manager' !== this.context.currentUser.role
                          ) {
                            t.next = 5;
                            break;
                          }
                          return (
                            (t.next = 3),
                            p.a.awrap(
                              this.getProjects().then(function(t) {
                                return e.populateNotificationList(t);
                              })
                            )
                          );
                        case 3:
                          t.next = 7;
                          break;
                        case 5:
                          return (
                            (t.next = 7),
                            p.a.awrap(this.populateNotificationList())
                          );
                        case 7:
                        case 'end':
                          return t.stop();
                      }
                  },
                  null,
                  this
                );
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this;
                return this.state.error
                  ? null
                  : 'owner' === this.context.currentUser.role
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      this.state.notificationCount > 0 &&
                        r.a.createElement(
                          'button',
                          {
                            className: 'JobNotification__btn',
                            onClick: function(t) {
                              return e.renderList(t);
                            },
                          },
                          r.a.createElement(
                            'span',
                            { className: 'JobNotification__icon' },
                            this.state.notificationDropDown
                              ? V({ style: 'left' })
                              : V({ style: 'collapse' })
                          ),
                          'Notifications',
                          r.a.createElement(
                            'span',
                            { className: 'JobNotification__number' },
                            this.state.notificationCount
                          )
                        ),
                      this.state.notificationDropDown &&
                        this.state.notificationCount > 0
                        ? r.a.createElement(re, {
                            newEmployees: this.state.newEmployees,
                            completedProjects: this.state.completedProjects,
                            newProjects: this.state.newProjects,
                            user: this.context.currentUser,
                            updateList: this.updateNewEmployees,
                            updateProjectList: this.updateProjectList,
                            renderList: this.renderList,
                          })
                        : r.a.createElement(r.a.Fragment, null)
                    )
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      this.state.notificationCount > 0 &&
                        r.a.createElement(
                          'button',
                          {
                            className: 'JobNotification__btn',
                            onClick: function(t) {
                              return e.renderList(t);
                            },
                          },
                          r.a.createElement(
                            'span',
                            { className: 'JobNotification__icon' },
                            this.state.notificationDropDown
                              ? V({ style: 'left' })
                              : V({ style: 'collapse' })
                          ),
                          'Notifications',
                          r.a.createElement(
                            'span',
                            { className: 'JobNotification__number' },
                            this.state.notificationCount
                          )
                        ),
                      this.state.notificationDropDown &&
                        this.state.notificationCount > 0
                        ? r.a.createElement(ne, {
                            notificationList: this.state.notificationList,
                            updateList: this.updateList,
                            renderList: this.renderList,
                            promoted: this.state.promoted,
                            dismissPromoted: this.dismissPromoted,
                          })
                        : null
                    );
              },
            },
          ]),
          t
        );
      })(n.Component);
      oe.contextType = _;
      var ce = (function(e) {
        function t() {
          var e, a;
          Object(m.a)(this, t);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((a = Object(f.a)(
              this,
              (e = Object(g.a)(t)).call.apply(e, [this].concat(r))
            )).showRole = function() {
              return 'owner' === a.context.currentUser.role
                ? 'Owner'
                : 'project manager' === a.context.currentUser.role
                ? 'Project Manager'
                : 'project worker' === a.context.currentUser.role
                ? 'Project Worker'
                : void 0;
            }),
            (a.handleLogout = function() {
              a.props.setPath(null),
                localStorage.removeItem('path'),
                E.auth().signOut();
            }),
            a
          );
        }
        return (
          Object(b.a)(t, e),
          Object(h.a)(t, [
            {
              key: 'renderLoginLink',
              value: function() {
                return r.a.createElement(
                  'div',
                  { className: 'Header__sub_container' },
                  r.a.createElement(
                    'div',
                    { className: 'Header__login' },
                    r.a.createElement(
                      s.b,
                      { className: 'Header__btn Header__alt', to: '/login' },
                      'Log In'
                    ),
                    r.a.createElement(
                      s.b,
                      {
                        className: 'Header__btn Header__primary',
                        to: '/register',
                      },
                      'Register'
                    )
                  )
                );
              },
            },
            {
              key: 'renderLogoutLink',
              value: function() {
                var e = this;
                return r.a.createElement(
                  'div',
                  { className: 'Header__sub_container' },
                  r.a.createElement(
                    'div',
                    { className: 'Header__user_info' },
                    r.a.createElement(
                      'span',
                      { 'test-id': 'header-name' },
                      'Welcome, ',
                      this.context.currentUser.name,
                      '!'
                    ),
                    r.a.createElement(
                      'span',
                      { 'test-id': 'header-role' },
                      'Role: ',
                      this.showRole()
                    )
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'Header__db_logout' },
                    r.a.createElement(
                      s.b,
                      { to: '/dashboard' },
                      r.a.createElement(
                        'h3',
                        {
                          className: 'Header__dashboard',
                          id: 'dashboard-button',
                        },
                        'Dashboard'
                      )
                    ),
                    r.a.createElement(
                      s.b,
                      {
                        onClick: function() {
                          return e.handleLogout();
                        },
                        className: 'Header__btn  Header__alt',
                        to: '/',
                        'test-id': 'logout-button',
                      },
                      'Log Out'
                    )
                  )
                );
              },
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    'nav',
                    { className: 'Header' },
                    r.a.createElement(
                      'h1',
                      null,
                      r.a.createElement(
                        s.b,
                        { className: 'Header__link', to: '/dashboard' },
                        r.a.createElement('img', {
                          className: 'Header__logo',
                          src: te.a,
                          alt: 'man reclining in chair',
                        }),
                        r.a.createElement(
                          'span',
                          { className: 'Header__app_name' },
                          'manageLazily'
                        )
                      )
                    ),
                    this.context.currentUser
                      ? this.renderLogoutLink()
                      : this.renderLoginLink()
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'Header__notifications' },
                    this.context.currentUser &&
                      r.a.createElement(oe, { user: this.context.currentUser })
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      ce.contextType = _;
      var se = Object(l.g)(function(e, t) {
          var a = t.history,
            o = Object(n.useContext)(_).currentUser,
            c = Object(n.useCallback)(
              function(e) {
                var t, a, n;
                return p.a.async(function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          e.preventDefault(),
                          (t = e.target.elements),
                          (a = t.email),
                          (n = t.password),
                          (r.next = 4),
                          p.a.awrap(
                            E.auth()
                              .signInWithEmailAndPassword(a.value, n.value)
                              .catch(function(e) {
                                console.warn(e),
                                  M.a.fire({
                                    title: 'Error!',
                                    text:
                                      'auth/user-not-found' === e.code
                                        ? 'Incorrect email'
                                        : 'Incorrect password',
                                    icon: 'error',
                                    confirmButtonText: 'Close',
                                  });
                              })
                          )
                        );
                      case 4:
                      case 'end':
                        return r.stop();
                    }
                });
              },
              [a]
            );
          return o
            ? r.a.createElement(l.a, { to: '/dashboard' })
            : r.a.createElement(
                'div',
                { className: 'Login' },
                r.a.createElement(
                  'form',
                  { className: 'Form', onSubmit: c },
                  r.a.createElement('legend', null, 'Login'),
                  r.a.createElement(
                    B,
                    null,
                    'Email',
                    r.a.createElement(I, {
                      'test-id': 'login-email',
                      name: 'email',
                      type: 'email',
                      placeholder: 'Email',
                      required: !0,
                    })
                  ),
                  r.a.createElement(
                    B,
                    null,
                    'Password',
                    r.a.createElement(I, {
                      'test-id': 'login-password',
                      name: 'password',
                      type: 'password',
                      placeholder: 'Password',
                      required: !0,
                    })
                  ),
                  r.a.createElement(
                    'button',
                    {
                      className: 'btn_highlight_color',
                      type: 'submit',
                      'test-id': 'login-button',
                    },
                    'Log in'
                  )
                )
              );
        }),
        ie =
          (a(131),
          Object(l.g)(function(e, t) {
            var a = e.history,
              o = E.functions(),
              c = Object(n.useState)([]),
              s = Object(i.a)(c, 2),
              l = s[0],
              u = s[1],
              d = Object(n.useState)('worker'),
              m = Object(i.a)(d, 2),
              h = m[0],
              f = m[1];
            Object(n.useEffect)(function() {
              (function() {
                var e;
                return p.a.async(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = []), (t.next = 3), p.a.awrap(y.getAllOrgs())
                        );
                      case 3:
                        return (
                          t.sent.forEach(function(t) {
                            return e.push(t.data().name);
                          }),
                          t.abrupt('return', e)
                        );
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                });
              })().then(function(e) {
                return u(e);
              });
            }, []);
            var g = function(e, t) {
                e.stopPropagation(), f(t);
              },
              b = C(
                { email: '', name: '', password: '', orgName: '' },
                O.validateSignup,
                function() {
                  var e, t, n, r, c, s, i, l, u;
                  return p.a.async(function(d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          return (
                            (e = x.email),
                            (t = x.name),
                            (n = x.password),
                            (r = x.orgName),
                            (d.next = 3),
                            p.a.awrap(o.httpsCallable('registerOwner'))
                          );
                        case 3:
                          return (
                            (c = d.sent),
                            (d.next = 6),
                            p.a.awrap(o.httpsCallable('registerWorker'))
                          );
                        case 6:
                          return (
                            (s = d.sent),
                            (d.next = 9),
                            p.a.awrap(o.httpsCallable('registerProjectManager'))
                          );
                        case 9:
                          (i = d.sent),
                            (l = {
                              email: e,
                              password: n,
                              name: t,
                              org: r,
                              displayName: t,
                            }),
                            (u = { email: e, name: t, org: r, displayName: t }),
                            (d.t0 = h),
                            (d.next =
                              'owner' === d.t0
                                ? 15
                                : 'worker' === d.t0
                                ? 17
                                : 'manager' === d.t0
                                ? 19
                                : 21);
                          break;
                        case 15:
                          return (
                            c(l)
                              .then(function() {
                                return y.createOwner(
                                  Object(w.a)({}, u, { role: 'owner' }),
                                  l.org
                                );
                              })
                              .catch(function(e) {
                                console.warn(e),
                                  M.a.fire({
                                    title: 'Error!',
                                    text:
                                      'There was an issue with registration - please refresh the page and try again.',
                                    icon: 'error',
                                    confirmButtonText: 'Close',
                                  });
                              }),
                            d.abrupt('break', 22)
                          );
                        case 17:
                          return (
                            s(l)
                              .then(function() {
                                return y.createUserInOrg(
                                  Object(w.a)({}, u, {
                                    role: 'project worker',
                                  }),
                                  r
                                );
                              })
                              .catch(function(e) {
                                console.warn(e),
                                  M.a.fire({
                                    title: 'Error!',
                                    text:
                                      'There was an issue with registration - please refresh the page and try again.',
                                    icon: 'error',
                                    confirmButtonText: 'Close',
                                  });
                              }),
                            d.abrupt('break', 22)
                          );
                        case 19:
                          return (
                            i(l)
                              .then(function() {
                                return y.createUserInOrg(
                                  Object(w.a)({}, u, {
                                    role: 'project manager',
                                  }),
                                  r
                                );
                              })
                              .catch(function(e) {
                                console.warn(e),
                                  M.a.fire({
                                    title: 'Error!',
                                    text:
                                      'There was an issue with registration - please refresh the page and try again.',
                                    icon: 'error',
                                    confirmButtonText: 'Close',
                                  });
                              }),
                            d.abrupt('break', 22)
                          );
                        case 21:
                          return d.abrupt('break', 22);
                        case 22:
                          return (
                            a.push('/login'),
                            d.abrupt('return', ''.concat(e, ' signed up'))
                          );
                        case 24:
                        case 'end':
                          return d.stop();
                      }
                  });
                }
              ),
              j = b.handleSubmit,
              _ = b.errors,
              v = b.handleChange,
              x = b.values,
              k = b.handleBlur,
              P = b.isSubmitting;
            return r.a.createElement(
              'div',
              { className: 'Register' },
              r.a.createElement(
                'form',
                { className: 'Form', onSubmit: j },
                r.a.createElement('h1', null, 'I am a: '),
                r.a.createElement(
                  'div',
                  { className: 'radio-toolbar' },
                  r.a.createElement(I, {
                    type: 'radio',
                    value: 'worker',
                    id: 'check_worker',
                    name: 'entry_type',
                    checked: 'worker' === h,
                    onChange: function(e) {
                      return g(e, 'worker');
                    },
                  }),
                  r.a.createElement(
                    B,
                    { htmlFor: 'check_worker' },
                    'Project Worker'
                  ),
                  r.a.createElement(I, {
                    type: 'radio',
                    value: 'manager',
                    id: 'check_manager',
                    name: 'entry_type',
                    checked: 'manager' === h,
                    onChange: function(e) {
                      return g(e, 'manager');
                    },
                  }),
                  r.a.createElement(
                    B,
                    { htmlFor: 'check_manager' },
                    'Project Manager'
                  ),
                  r.a.createElement(I, {
                    type: 'radio',
                    value: 'owner',
                    id: 'check_owner',
                    name: 'entry_type',
                    checked: 'owner' === h,
                    onChange: function(e) {
                      return g(e, 'owner');
                    },
                  }),
                  r.a.createElement(
                    B,
                    { htmlFor: 'check_owner' },
                    'Company Owner'
                  )
                ),
                _.email &&
                  r.a.createElement(
                    'span',
                    { className: 'error' },
                    '*',
                    _.email
                  ),
                r.a.createElement(
                  B,
                  null,
                  'Email',
                  r.a.createElement(I, {
                    name: 'email',
                    type: 'email',
                    onChange: v,
                    value: x.email,
                    onBlur: k,
                    placeholder: 'Email',
                  })
                ),
                _.password &&
                  r.a.createElement(
                    'span',
                    { className: 'error' },
                    '*',
                    _.password
                  ),
                r.a.createElement(
                  B,
                  null,
                  'Password',
                  r.a.createElement(I, {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    onChange: v,
                    onBlur: k,
                    value: x.password,
                  })
                ),
                _.name &&
                  r.a.createElement(
                    'span',
                    { className: 'error' },
                    '*',
                    _.name
                  ),
                r.a.createElement(
                  B,
                  { htmlFor: 'username' },
                  'Username',
                  r.a.createElement(I, {
                    type: 'text',
                    name: 'name',
                    onChange: v,
                    value: x.name,
                    onBlur: k,
                    placeholder: 'Username',
                  })
                ),
                _.orgName &&
                  r.a.createElement(
                    'span',
                    { className: 'error' },
                    '*',
                    _.orgName
                  ),
                r.a.createElement(
                  B,
                  { htmlFor: 'orgName' },
                  'Organization Name'
                ),
                'owner' === h
                  ? r.a.createElement(I, {
                      type: 'text',
                      name: 'orgName',
                      onChange: v,
                      value: x.orgName,
                      onBlur: k,
                      placeholder: 'Organization name',
                    })
                  : r.a.createElement(
                      'select',
                      {
                        name: 'orgName',
                        onChange: v,
                        value: x.orgName,
                        onBlur: k,
                        placeholder: 'Organization name',
                      },
                      r.a.createElement(
                        'option',
                        { value: '', disabled: !0, hidden: !0 },
                        'Choose Organization...'
                      ),
                      l && l.length > 0
                        ? l.map(function(e, t) {
                            return r.a.createElement(
                              'option',
                              { key: t, value: e },
                              e
                            );
                          })
                        : r.a.createElement(r.a.Fragment, null)
                    ),
                r.a.createElement(
                  'button',
                  {
                    className: 'btn_highlight_color',
                    type: 'submit',
                    disabled: P,
                  },
                  'Sign Up'
                )
              )
            );
          })),
        le =
          (a(132),
          a(133),
          function(e) {
            var t = Object(n.useState)(!1),
              a = Object(i.a)(t, 2),
              o = (a[0], a[1]),
              c = Object(n.useContext)(_).currentUser,
              s = {
                name: e.job.name,
                description: e.job.description,
                total_hours: e.job.total_hours,
                note: '',
                employee: c.name,
              },
              l = C(s, O.validateWorkerEditForm, function() {
                var t, a, n, r, s;
                return p.a.async(
                  function(i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (t = h.name),
                            (a = h.description),
                            (n = h.total_hours),
                            (r = h.note),
                            (s = {
                              name: t,
                              description: a,
                              total_hours: parseInt(n),
                              note: r,
                              employee: c.name,
                            }),
                            (i.prev = 2),
                            (i.next = 5),
                            p.a.awrap(
                              y.updateEdit(
                                s,
                                e.job.id,
                                e.job.project_id,
                                e.job.organization
                              )
                            )
                          );
                        case 5:
                          return (
                            (i.next = 7),
                            p.a.awrap(
                              e
                                .handleStatus(e.job.id, 'edit request')
                                .then(o(!0))
                                .then(e.renderEditForm())
                            )
                          );
                        case 7:
                          i.next = 12;
                          break;
                        case 9:
                          (i.prev = 9),
                            (i.t0 = i.catch(2)),
                            M.a.fire({
                              title: 'Error!',
                              text: i.t0.message,
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 12:
                        case 'end':
                          return i.stop();
                      }
                  },
                  null,
                  null,
                  [[2, 9]]
                );
              }),
              u = l.handleSubmit,
              d = l.handleChange,
              m = l.handleBlur,
              h = l.values,
              f = l.errors,
              g = l.isSubmitting;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'form',
                { onSubmit: u, className: 'Form' },
                r.a.createElement(
                  B,
                  { htmlFor: 'name' },
                  'Task name',
                  r.a.createElement(I, {
                    name: 'name',
                    id: 'name',
                    type: 'text',
                    onChange: d,
                    value: h.name,
                    onBlur: m,
                  })
                ),
                r.a.createElement(
                  B,
                  { htmlFor: 'description' },
                  'Task Description',
                  r.a.createElement(L, {
                    name: 'description',
                    id: 'description',
                    type: 'text',
                    onChange: d,
                    value: h.description,
                    onBlur: m,
                  })
                ),
                r.a.createElement(
                  B,
                  { htmlFor: 'total_hours' },
                  'Total Hours: ',
                  e.job.total_hours,
                  r.a.createElement(I, {
                    name: 'total_hours',
                    id: 'total_hours',
                    type: 'number',
                    onChange: d,
                    value: h.total_hours,
                    onBlur: m,
                  })
                ),
                r.a.createElement(
                  B,
                  { htmlFor: 'note' },
                  'Note for Project Manager:',
                  r.a.createElement(L, {
                    name: 'note',
                    id: 'note',
                    type: 'text',
                    onChange: d,
                    value: h.note,
                    onBlur: m,
                  })
                ),
                r.a.createElement('input', {
                  type: 'button',
                  value: 'Cancel',
                  onClick: e.renderEditForm,
                }),
                r.a.createElement('input', {
                  type: 'submit',
                  disabled: g,
                  value: 'Submit',
                })
              ),
              f.note && r.a.createElement('p', null, f.note)
            );
          }),
        ue = function(e) {
          var t = Object(n.useContext)(_).currentUser,
            a = (function(e) {
              var t = Object(n.useState)(e),
                a = Object(i.a)(t, 2),
                r = a[0],
                o = a[1];
              return {
                value: r,
                setValue: o,
                reset: function() {
                  return o('');
                },
                bind: {
                  value: r,
                  onChange: function(e) {
                    o(e.target.value);
                  },
                },
              };
            })(''),
            o = a.value,
            c = a.bind,
            s = a.reset,
            l = Object(n.useState)(!1),
            u = Object(i.a)(l, 2),
            d = u[0],
            m = u[1];
          return (
            Object(n.useEffect)(function() {
              if (d)
                return function() {
                  p.a.async(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          s();
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  });
                };
            }),
            r.a.createElement(
              'form',
              {
                onSubmit: function(a) {
                  return (function(a) {
                    a.preventDefault();
                    var n = e.job,
                      r = parseInt(n.hours_completed) + parseInt(o),
                      c = n.employee_hours.find(function(e) {
                        return e.name === t.name;
                      }),
                      s = parseInt(c.hours) + parseInt(o);
                    c.hours = s;
                    var i = n.employee_hours.findIndex(function(e) {
                      return e.name === c.name;
                    });
                    (n.employee_hours[i] = c),
                      (n.hours_completed = r),
                      y
                        .editJob(n.id, n)
                        .then(m(!0))
                        .then(function() {
                          e.renderLogHoursForm();
                        })
                        .catch(function(e) {
                          console.warn(e),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue - please refresh the page and try again.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        });
                  })(a);
                },
                className: 'Form',
              },
              r.a.createElement(
                B,
                { htmlFor: 'job_hours' },
                'Number of Hours Worked:',
                r.a.createElement(
                  I,
                  Object.assign(
                    {
                      name: 'job_hours',
                      type: 'number',
                      placeholder: 0,
                      min: '1',
                      max: (function() {
                        var t = e.job;
                        return (
                          parseInt(t.total_hours) - parseInt(t.hours_completed)
                        );
                      })(),
                    },
                    c
                  )
                )
              ),
              r.a.createElement(
                'div',
                null,
                (function() {
                  var t = e.job,
                    a = t.hours_completed,
                    n = t.total_hours;
                  return r.a.createElement(
                    'span',
                    null,
                    'This task has ',
                    a,
                    ' hours worked out of an estimated',
                    ' ',
                    n,
                    ' hours needed.'
                  );
                })()
              ),
              r.a.createElement(
                'button',
                {
                  onClick: function() {
                    return e.renderLogHoursForm();
                  },
                  className: 'btn_secondary_color',
                },
                'Cancel'
              ),
              r.a.createElement(
                'button',
                { type: 'submit', className: 'btn_highlight_color' },
                'Submit Hours'
              )
            )
          );
        },
        pe = a(40),
        de = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(f.a)(
                this,
                Object(g.a)(t).call(this, e)
              )).handleApprovalSubmit = function(e, t) {
                var n,
                  r,
                  o = arguments;
                return p.a.async(
                  function(c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((n = o.length > 2 && void 0 !== o[2] && o[2]),
                            (r = o.length > 3 && void 0 !== o[3] ? o[3] : null),
                            n)
                          ) {
                            c.next = 14;
                            break;
                          }
                          return (
                            (c.prev = 3),
                            (c.next = 6),
                            p.a.awrap(
                              y.updateJobStatus(
                                e,
                                t,
                                a.props.job.project_id,
                                n,
                                a.props.job.organization,
                                r
                              )
                            )
                          );
                        case 6:
                          c.next = 12;
                          break;
                        case 8:
                          (c.prev = 8),
                            (c.t0 = c.catch(3)),
                            console.warn(c.t0),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue approving this task - please refresh the page and try again.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 12:
                          c.next = 24;
                          break;
                        case 14:
                          return (
                            (r = S.dateToTimestamp(new Date())),
                            (c.prev = 15),
                            (c.next = 18),
                            p.a.awrap(
                              y.updateJobStatus(
                                e,
                                t,
                                a.props.job.project_id,
                                n,
                                a.props.job.organization,
                                r
                              )
                            )
                          );
                        case 18:
                          c.next = 24;
                          break;
                        case 20:
                          (c.prev = 20),
                            (c.t1 = c.catch(15)),
                            console.warn(c.t1),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                'There was an issue approving this task - please refresh the page and try again.',
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 24:
                        case 'end':
                          return c.stop();
                      }
                  },
                  null,
                  null,
                  [
                    [3, 8],
                    [15, 20],
                  ]
                );
              }),
              (a.deleteTask = function(e) {
                e.stopPropagation(),
                  M.a
                    .fire({
                      title: 'Are you sure?',
                      text:
                        'By clicking the button below, you will be deleting this task.',
                      icon: 'question',
                      confirmButtonText: "I'm sure!",
                      showCancelButton: !0,
                    })
                    .then(function(e) {
                      if ('cancel' === e.dismiss) return null;
                      var t = a.props.job.id,
                        n = a.props.job.project_id,
                        r = a.props.job.organization;
                      y.deleteJobById(t, n, r);
                    });
              }),
              (a.renderEmployeeList = function(e) {
                return e && 0 !== e.length
                  ? e.map(function(e, t) {
                      var a = t + e;
                      return r.a.createElement('li', { key: a }, e);
                    })
                  : r.a.createElement('h5', null, 'No Workers Assigned');
              }),
              (a.toggleExpand = function() {
                a.setState({ expandJob: !a.state.expandJob });
              }),
              (a.showEditForm = function(e) {
                e.stopPropagation(),
                  a.setState({
                    showEditForm: !a.state.showEditForm,
                    expandJob: !1,
                  });
              }),
              (a.submitEditForm = function() {
                a.setState({ showEditForm: !1 });
              }),
              (a.submitLogHours = function() {
                a.setState({ showLogHours: !a.state.showLogHours });
              }),
              (a.renderLogHoursForm = function(e) {
                e.stopPropagation(),
                  a.setState({
                    showLogHours: !a.state.showLogHours,
                    expandJob: !1,
                  });
              }),
              (a.showWorkerEditForm = function(e) {
                e.stopPropagation(),
                  a.setState({
                    showWorkerEditForm: !a.state.showWorkerEditForm,
                    expandJob: !1,
                  });
              }),
              (a.submitWorkerEdit = function() {
                a.setState({ showWorkerEditForm: !1 });
              }),
              (a.state = {
                expandJob: !1,
                showEditForm: !1,
                showLogHours: !1,
                showWorkerEditForm: !1,
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'renderProjectButtons',
                value: function(e, t, a, n, o) {
                  var c = this,
                    s = Math.floor((a / t) * 100);
                  return 'project worker' === this.context.currentUser.role
                    ? 'submitted' === o || 'completed' === o
                      ? r.a.createElement(r.a.Fragment, null)
                      : e || 100 !== s
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            'div',
                            {
                              className: 'JobItem__fa',
                              onClick: this.renderLogHoursForm,
                              'data-tip': 'Log Hours',
                            },
                            V({ style: 'clock' })
                          ),
                          ('completed' === o && 'submitted' === o) ||
                            'edit request' === o
                            ? r.a.createElement(r.a.Fragment, null)
                            : r.a.createElement(
                                'div',
                                {
                                  className: 'JobItem__fa',
                                  onClick: function(e) {
                                    return c.showWorkerEditForm(e);
                                  },
                                  'data-tip': 'Request Edit',
                                },
                                V({ style: 'requestEdit' })
                              )
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            'div',
                            {
                              className: 'JobItem__fa_bigger',
                              onClick: function(e) {
                                return c.handleApprovalSubmit(
                                  n,
                                  'submitted',
                                  !1
                                );
                              },
                              'data-tip': 'Submit Approval',
                            },
                            V({ style: 'submit' })
                          )
                        )
                    : 'project manager' === this.context.currentUser.role ||
                      'owner' === this.context.currentUser.role
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        'project manager' === this.context.currentUser.role &&
                          100 !== s
                          ? r.a.createElement(
                              'div',
                              {
                                className: 'JobItem__fa',
                                onClick: this.renderLogHoursForm,
                                'data-tip': 'Log Hours',
                              },
                              V({ style: 'clock' })
                            )
                          : '',
                        r.a.createElement(
                          'div',
                          {
                            className: 'JobItem__fa',
                            onClick: this.showEditForm,
                            'data-tip': 'Edit Task',
                          },
                          V({ style: 'edit' })
                        ),
                        r.a.createElement(
                          'div',
                          {
                            className: 'JobItem__fa',
                            'data-tip': 'delete',
                            onClick: this.deleteTask,
                          },
                          V({ style: 'delete' })
                        ),
                        'submitted' === o
                          ? r.a.createElement(
                              'div',
                              null,
                              r.a.createElement(
                                'div',
                                {
                                  className: 'JobItem__fa_bigger',
                                  onClick: function(e) {
                                    return c.handleApprovalSubmit(
                                      n,
                                      'completed',
                                      !0
                                    );
                                  },
                                  'data-tip': 'Approve',
                                },
                                V({ style: 'approve' })
                              ),
                              r.a.createElement(
                                'div',
                                {
                                  className: 'JobItem__fa_bigger',
                                  onClick: function(e) {
                                    return c.handleApprovalSubmit(
                                      n,
                                      'revisions'
                                    );
                                  },
                                  'data-tip': 'Make Revisions',
                                },
                                V({ style: 'revise' })
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              a / t === 1
                                ? r.a.createElement(
                                    'div',
                                    {
                                      className: 'JobItem__fa_bigger',
                                      onClick: function(e) {
                                        return c.handleApprovalSubmit(
                                          n,
                                          'submitted',
                                          !1
                                        );
                                      },
                                      'data-tip': 'Submit Approval',
                                    },
                                    V({ style: 'submit' })
                                  )
                                : r.a.createElement(r.a.Fragment, null)
                            )
                      )
                    : void 0;
                },
              },
              {
                key: 'renderChart',
                value: function(e) {
                  var t = [],
                    a = [];
                  e.employee_hours &&
                    e.employee_hours.forEach(function(e) {
                      a.push(e.name), t.push(e.hours);
                    }),
                    t.every(function(e) {
                      return 0 === e;
                    }) && (t = []);
                  var n = {
                    labels: a,
                    datasets: [
                      {
                        label: 'Logged Hours by Employee',
                        data: t,
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(255, 99, 132, 0.6)',
                        ],
                      },
                    ],
                  };
                  return 0 !== t.length
                    ? r.a.createElement(pe.b, {
                        data: n,
                        options: {
                          responsive: !0,
                          maintainAspectRatio: !1,
                          title: {
                            display: !0,
                            text: 'Hours Logged',
                            fontSize: 20,
                          },
                          legend: { labels: { fontSize: 16 } },
                        },
                      })
                    : r.a.createElement(r.a.Fragment, null);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.job,
                    t = Math.floor((e.hours_completed / e.total_hours) * 100);
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'li',
                      { className: 'JobItem', key: e.id, id: e.id },
                      r.a.createElement(
                        'div',
                        {
                          className: 'JobItem__container',
                          onClick: this.toggleExpand,
                        },
                        r.a.createElement(
                          'div',
                          { className: 'JobItem__icon' },
                          V({
                            style: ''.concat(
                              this.state.expandJob ? 'expand' : 'collapse'
                            ),
                          })
                        ),
                        r.a.createElement(
                          'span',
                          { className: 'JobItem__name' },
                          e.name
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'JobItem__details' },
                          r.a.createElement('span', null, 'Details:'),
                          r.a.createElement(
                            'div',
                            { className: 'JobItem__details_text' },
                            e.description
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'JobItem__progress' },
                          r.a.createElement(
                            'div',
                            { className: 'JobItem__meter_container' },
                            r.a.createElement('span', null, 'Est. Progress'),
                            r.a.createElement(G, { percentage: t })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'JobItem__date_etc' },
                            r.a.createElement(
                              'span',
                              { className: 'JobItem__date' },
                              'Due: ',
                              S.TStoDisplayDate(e.deadline)
                            ),
                            'completed' === e.status &&
                              r.a.createElement('span', null, 'Task Completed'),
                            e.approval ||
                              100 !== t ||
                              'revisions' === e.status ||
                              'project manager' ===
                                this.context.currentUser.role
                              ? r.a.createElement(r.a.Fragment, null)
                              : r.a.createElement(
                                  'span',
                                  null,
                                  'Awaiting Approval'
                                ),
                            e.approval || 100 !== t || 'revisions' !== e.status
                              ? r.a.createElement(r.a.Fragment, null)
                              : r.a.createElement(
                                  'span',
                                  { className: 'JobItem__revisions_requested' },
                                  'Revision Requested'
                                ),
                            'completed' !== e.status
                              ? S.dateDiff(e.deadline) && S.dateDiff(e.deadline)
                              : ''
                          )
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'JobItem__buttons' },
                          this.renderProjectButtons(
                            e.approval,
                            e.total_hours,
                            e.hours_completed,
                            e.id,
                            e.status
                          )
                        )
                      ),
                      this.state.expandJob &&
                        r.a.createElement(
                          'div',
                          { className: 'JobItem__expand_container' },
                          r.a.createElement(
                            'div',
                            { className: 'JobItem__assigned_employees' },
                            r.a.createElement(
                              'span',
                              null,
                              'Assigned Employees: '
                            ),
                            r.a.createElement(
                              'ul',
                              null,
                              this.renderEmployeeList(e.project_workers)
                            )
                          ),
                          this.renderChart(e)
                        ),
                      r.a.createElement(
                        'div',
                        { className: 'JobItem__form_container' },
                        this.state.showLogHours &&
                          r.a.createElement(ue, {
                            job: e,
                            renderLogHoursForm: this.submitLogHours,
                          }),
                        this.state.showEditForm &&
                          r.a.createElement(
                            'div',
                            { className: 'JobItem__form' },
                            r.a.createElement(ae, {
                              showJobForm: this.submitEditForm,
                              job: e,
                            })
                          ),
                        this.state.showWorkerEditForm &&
                          'project worker' === this.context.currentUser.role &&
                          r.a.createElement(le, {
                            job: e,
                            renderEditForm: this.submitWorkerEdit,
                            handleStatus: this.handleApprovalSubmit,
                            className: 'Form',
                          })
                      ),
                      r.a.createElement($.a, {
                        place: 'bottom',
                        type: 'dark',
                        effect: 'float',
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      de.contextType = _;
      var me = de,
        he = (function(e) {
          function t(e) {
            var a;
            return (
              Object(m.a)(this, t),
              ((a = Object(f.a)(
                this,
                Object(g.a)(t).call(this, e)
              )).onJobsUpdate = function(e) {
                var t = [];
                'project worker' === a.context.currentUser.role
                  ? e.forEach(function(e) {
                      e
                        .data()
                        .project_workers.includes(a.context.currentUser.name) &&
                        t.push(e.data());
                    })
                  : 'project manager' === a.context.currentUser.role
                  ? e.forEach(function(e) {
                      e.data().project_manager === a.context.currentUser.name &&
                        t.push(e.data());
                    })
                  : e.forEach(function(e) {
                      t.push(e.data());
                    }),
                  a.setState({ jobs: t, loading: !1 }),
                  a.grabProgress();
              }),
              (a.grabProgress = function() {
                var e = 0,
                  t = 0;
                a.state.jobs.map(function(a) {
                  return (
                    (e = parseInt(a.total_hours) + e),
                    (t = parseInt(a.hours_completed) + t),
                    null
                  );
                }),
                  a.props.getProgress(t, e);
              }),
              (a.unsubscribe = null),
              (a.state = { jobs: [], loading: !0, showLogHours: !1 }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  try {
                    this.unsubscribe = y
                      .jobsListener(
                        this.context.currentUser.org,
                        this.props.projectId
                      )
                      .onSnapshot(this.onJobsUpdate);
                  } catch (e) {
                    M.a.fire({
                      title: 'Error!',
                      text:
                        "There was an issue loading this project's tasks - please refresh the page and try again.",
                      icon: 'error',
                      confirmButtonText: 'Close',
                    });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.unsubscribe();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.jobs;
                  return this.state.loading
                    ? r.a.createElement('div', null)
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          'ul',
                          { className: 'Jobs__list' },
                          t.length > 0
                            ? t.map(function(t) {
                                return r.a.createElement(me, {
                                  projectId: e.props.projectId,
                                  job: t,
                                  key: t.id,
                                });
                              })
                            : r.a.createElement(
                                'span',
                                null,
                                'There are currently no tasks to display for this project.'
                              )
                        )
                      );
                },
              },
            ]),
            t
          );
        })(n.Component);
      he.contextType = _;
      a(225);
      var fe = E.firestore(),
        ge = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(g.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                jobDue: {
                  labels: [
                    ''
                      .concat(new Date(Date.now()).getMonth() + 1, '/')
                      .concat(new Date(Date.now()).getDate(), '/')
                      .concat(new Date(Date.now()).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 864e5).getDate(), '/')
                      .concat(new Date(Date.now() + 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 1728e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 1728e5).getDate(), '/')
                      .concat(new Date(Date.now() + 1728e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 2592e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 2592e5).getDate(), '/')
                      .concat(new Date(Date.now() + 2592e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 3456e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 3456e5).getDate(), '/')
                      .concat(new Date(Date.now() + 3456e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 432e6).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 432e6).getDate(), '/')
                      .concat(new Date(Date.now() + 432e6).getFullYear()),
                    ''
                      .concat(new Date(Date.now() + 5184e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() + 5184e5).getDate(), '/')
                      .concat(new Date(Date.now() + 5184e5).getFullYear()),
                  ],
                  datasets: [
                    {
                      label: 'Tasks Due',
                      data: [],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                      ],
                    },
                  ],
                },
                jobHistory: {
                  labels: [
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 6048e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 5184e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 432e6).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 3456e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 2592e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 1728e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                    ''
                      .concat(new Date(Date.now() - 864e5).getMonth() + 1, '/')
                      .concat(new Date(Date.now() - 864e5).getDate(), '/')
                      .concat(new Date(Date.now() - 864e5).getFullYear()),
                  ],
                  datasets: [
                    {
                      label: 'Task Completion History (7 days)',
                      data: [],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                      ],
                    },
                  ],
                },
              }),
              (a.populateStats = function() {
                var e, t, n, r;
                return p.a.async(function(o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        (e = new Array(a.state.jobDue.labels.length)),
                          (t = new Array(a.state.jobDue.labels.length)),
                          (n = function(n) {
                            return p.a.async(function(r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (r.next = 2),
                                      p.a.awrap(
                                        fe
                                          .collection('organizations')
                                          .doc(a.context.currentUser.org)
                                          .collection('projects')
                                          .doc(a.props.id)
                                          .collection('jobs')
                                          .get()
                                          .then(function(r) {
                                            var o = 0,
                                              c = 0;
                                            r.docs.forEach(function(e) {
                                              e.data().date_completed ||
                                                (a.state.jobDue.labels[n] ===
                                                  ''
                                                    .concat(
                                                      new Date(
                                                        1e3 *
                                                          e.data().deadline
                                                            .seconds
                                                      ).getMonth() + 1,
                                                      '/'
                                                    )
                                                    .concat(
                                                      new Date(
                                                        1e3 *
                                                          e.data().deadline
                                                            .seconds
                                                      ).getDate(),
                                                      '/'
                                                    )
                                                    .concat(
                                                      new Date(
                                                        1e3 *
                                                          e.data().deadline
                                                            .seconds
                                                      ).getFullYear()
                                                    ) &&
                                                  o++),
                                                e.data().date_completed &&
                                                  a.state.jobHistory.labels[
                                                    n
                                                  ] ===
                                                    ''
                                                      .concat(
                                                        new Date(
                                                          1e3 *
                                                            e.data()
                                                              .date_completed
                                                              .seconds
                                                        ).getMonth() + 1,
                                                        '/'
                                                      )
                                                      .concat(
                                                        new Date(
                                                          1e3 *
                                                            e.data()
                                                              .date_completed
                                                              .seconds
                                                        ).getDate(),
                                                        '/'
                                                      )
                                                      .concat(
                                                        new Date(
                                                          1e3 *
                                                            e.data()
                                                              .date_completed
                                                              .seconds
                                                        ).getFullYear()
                                                      ) &&
                                                  'completed' ===
                                                    e.data().status &&
                                                  c++;
                                            }),
                                              (e[n] = o),
                                              (t[n] = c);
                                          })
                                      )
                                    );
                                  case 2:
                                    e.every(function(e) {
                                      return 0 === e;
                                    }) && (e = []),
                                      t.every(function(e) {
                                        return 0 === e;
                                      }) && (t = []);
                                  case 4:
                                  case 'end':
                                    return r.stop();
                                }
                            });
                          }),
                          (r = 0);
                      case 4:
                        if (!(r < a.state.jobDue.labels.length)) {
                          o.next = 10;
                          break;
                        }
                        return (o.next = 7), p.a.awrap(n(r));
                      case 7:
                        r++, (o.next = 4);
                        break;
                      case 10:
                        a.setState({
                          jobDue: {
                            labels: a.state.jobDue.labels,
                            datasets: [
                              {
                                label: a.state.jobDue.datasets[0].label,
                                data: e,
                                backgroundColor:
                                  a.state.jobDue.datasets[0].backgroundColor,
                              },
                            ],
                          },
                          jobHistory: {
                            labels: a.state.jobHistory.labels,
                            datasets: [
                              {
                                label: a.state.jobHistory.datasets[0].label,
                                data: t,
                                backgroundColor:
                                  a.state.jobHistory.datasets[0]
                                    .backgroundColor,
                              },
                            ],
                          },
                        }),
                          a.props.updated && a.props.turnOffUpdate();
                      case 12:
                      case 'end':
                        return o.stop();
                    }
                });
              }),
              (a.componentDidMount = function() {
                return p.a.async(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        a.populateStats();
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                });
              }),
              a
            );
          }
          return (
            Object(b.a)(t, e),
            Object(h.a)(t, [
              {
                key: 'render',
                value: function() {
                  return (
                    this.props.updated && this.populateStats(),
                    r.a.createElement(
                      'div',
                      { className: 'Statistics' },
                      0 !== this.state.jobDue.datasets[0].data.length
                        ? r.a.createElement(pe.a, {
                            className: 'due',
                            data: this.state.jobDue,
                            options: {
                              legend: { labels: { fontSize: 30 } },
                              scales: {
                                yAxes: [
                                  {
                                    ticks: {
                                      beginAtZero: !0,
                                      callback: function(e) {
                                        if (e % 1 === 0) return e;
                                      },
                                      fontSize: 20,
                                    },
                                  },
                                ],
                                xAxes: [{ ticks: { fontSize: 20 } }],
                              },
                              responsive: !0,
                              maintainAspectRatio: !1,
                            },
                          })
                        : r.a.createElement(
                            'span',
                            null,
                            'You have no tasks due soon'
                          ),
                      0 !== this.state.jobHistory.datasets[0].data.length
                        ? r.a.createElement(pe.a, {
                            className: 'history',
                            data: this.state.jobHistory,
                            options: {
                              legend: { labels: { fontSize: 30 } },
                              scales: {
                                yAxes: [
                                  {
                                    ticks: {
                                      beginAtZero: !0,
                                      callback: function(e) {
                                        if (e % 1 === 0) return e;
                                      },
                                      fontSize: 20,
                                    },
                                  },
                                ],
                                xAxes: [{ ticks: { fontSize: 20 } }],
                              },
                              responsive: !0,
                              maintainAspectRatio: !1,
                            },
                          })
                        : r.a.createElement(
                            'span',
                            { className: 'Statistics__no_tasks' },
                            'You have not completed any tasks in the last 7 days'
                          )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      ge.contextType = _;
      var be = (function(e) {
        function t(e) {
          var a;
          return (
            Object(m.a)(this, t),
            ((a = Object(f.a)(
              this,
              Object(g.a)(t).call(this, e)
            )).updateProject = function(e) {
              a.setState({ project: e, loading: !1 });
            }),
            (a.getProgress = function(e, t, n) {
              var r = 0,
                o = 0,
                c = a.state.project;
              (o += t),
                0 === (r += e)
                  ? a.setState({ progress: 0 })
                  : (a.setState({ progress: parseInt(r), total: o }),
                    (c.progress = parseInt(((r / o) * 100).toFixed(2))),
                    y.updateProject(c),
                    a.setState({ project: c }));
            }),
            (a.autoComplete = function() {
              M.a
                .fire({
                  title: 'Are you sure?',
                  text:
                    'By clicking the button below, you will automatically mark this project as complete along with any unfinished tasks.',
                  icon: 'question',
                  confirmButtonText: "I'm sure!",
                  showCancelButton: !0,
                })
                .then(function(e) {
                  if ('cancel' === e.dismiss) return null;
                  var t = a.state.project;
                  (t.autoComplete = !0),
                    (t.alert = !0),
                    (t.date_completed = S.dateToTimestamp(new Date())),
                    y.updateProject(t);
                });
            }),
            (a.approveProject = function() {
              var e;
              return p.a.async(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        ((e = Object(w.a)({}, a.state.project, {
                          date_completed: null,
                        })).date_completed = S.dateToTimestamp(new Date())),
                        (e.alert = !0),
                        (t.next = 5),
                        p.a.awrap(y.updateProject(e))
                      );
                    case 5:
                    case 'end':
                      return t.stop();
                  }
              });
            }),
            (a.showJobForm = function(e) {
              e.stopPropagation(),
                a.state.showJobForm
                  ? a.setState({ showJobForm: !1, expandJobs: !0 })
                  : a.setState({ showJobForm: !0, expandJobs: !1 });
            }),
            (a.submitJobForm = function() {
              a.setState({ showJobForm: !1, statsUpdated: !0 });
            }),
            (a.turnOffUpdate = function() {
              a.setState({ statsUpdated: !1 });
            }),
            (a.expandStats = function() {
              a.setState({ expandStats: !a.state.expandStats });
            }),
            (a.expandJobs = function() {
              a.setState({ expandJobs: !a.state.expandJobs });
            }),
            (a.toggleExpandPersonnel = function(e) {
              e.stopPropagation(),
                a.setState({ expandPersonnel: !a.state.expandPersonnel });
            }),
            (a.unsubscribe = null),
            (a.state = {
              project: null,
              showJobForm: !1,
              loading: !0,
              toggleState: !1,
              progress: 0,
              total: 0,
              error: null,
              expandStats: !0,
              expandJobs: !0,
              expandPersonnel: !0,
            }),
            a
          );
        }
        return (
          Object(b.a)(t, e),
          Object(h.a)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                return p.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          try {
                            this.unsubscribe = y
                              .projectsListener(
                                this.context.currentUser.org,
                                this.props.id
                              )
                              .onSnapshot(function(t) {
                                e.updateProject(t.data());
                              });
                          } catch (a) {
                            this.setState({ error: 'Error' }),
                              console.warn(a),
                              M.a.fire({
                                title: 'Error!',
                                text:
                                  "There was an issue loading this project's information - please refresh the page and try again.",
                                icon: 'error',
                                confirmButtonText: 'Close',
                              });
                          }
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  null,
                  this
                );
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.unsubscribe();
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.state,
                  a = t.project,
                  n = t.showJobForm,
                  o = this.context.currentUser;
                return this.state.loading && !this.state.error
                  ? r.a.createElement(N, null)
                  : this.state.error
                  ? r.a.createElement('h2', null, 'Project was unable to load')
                  : a
                  ? r.a.createElement(
                      'section',
                      null,
                      r.a.createElement(
                        'div',
                        { 'test-id': 'projectContainer', 'test-data': a.id },
                        r.a.createElement(
                          'header',
                          { className: 'App__org_header' },
                          r.a.createElement(
                            'h2',
                            { id: 'companyName' },
                            this.context.currentUser.org
                          ),
                          r.a.createElement(
                            'span',
                            { id: 'currentDate' },
                            new Date().toDateString()
                          )
                        ),
                        r.a.createElement(
                          'div',
                          {
                            className:
                              'projectbar_container App__separate_bottom',
                          },
                          r.a.createElement(Q, {
                            proj: a,
                            role: this.context.currentUser.role,
                            view: 'project',
                          })
                        )
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'projectView_main' },
                        r.a.createElement(
                          'div',
                          { className: 'ProjectView__jobs_stats' },
                          'project worker' === o.role
                            ? r.a.createElement(r.a.Fragment, null)
                            : r.a.createElement(
                                'div',
                                {
                                  className:
                                    'ProjectView__stats App__separate_bottom',
                                },
                                r.a.createElement(
                                  'div',
                                  {
                                    className: 'App__section_header',
                                    onClick: function() {
                                      return e.expandStats();
                                    },
                                  },
                                  r.a.createElement(
                                    'div',
                                    { className: 'App__fa_h1' },
                                    V({
                                      style: ''.concat(
                                        this.state.expandStats
                                          ? 'minus'
                                          : 'plus'
                                      ),
                                    }),
                                    r.a.createElement('h3', null, 'Statistics')
                                  )
                                ),
                                this.state.expandStats &&
                                  r.a.createElement(
                                    'div',
                                    {
                                      className: 'ProjectView__stats_container',
                                    },
                                    r.a.createElement(
                                      ge,
                                      Object.assign({}, this.props, {
                                        updated: this.state.statsUpdated,
                                        turnOffUpdate: this.turnOffUpdate,
                                      })
                                    )
                                  )
                              ),
                          r.a.createElement(
                            'div',
                            {
                              className: 'App__section_header',
                              onClick: function() {
                                return e.expandJobs();
                              },
                            },
                            r.a.createElement(
                              'div',
                              { className: 'App__fa_h1' },
                              ' ',
                              V({
                                style: ''.concat(
                                  this.state.expandJobs ? 'minus' : 'plus'
                                ),
                              }),
                              'project worker' === o.role
                                ? r.a.createElement('h3', null, 'Your Tasks')
                                : r.a.createElement('h3', null, 'Tasks')
                            ),
                            'project worker' === o.role
                              ? ''
                              : r.a.createElement(
                                  'button',
                                  {
                                    className: 'ProjectView__add',
                                    onClick: this.showJobForm,
                                    'test-id': 'add-task',
                                  },
                                  'Add Task'
                                )
                          ),
                          n &&
                            r.a.createElement(
                              ae,
                              Object.assign({}, this.props, {
                                setJob: this.setJob,
                                project: a,
                                showJobForm: this.submitJobForm,
                                projectId: this.props.id,
                              })
                            ),
                          this.state.expandJobs &&
                            r.a.createElement(he, {
                              projectId: this.props.id,
                              getProgress: this.getProgress,
                            })
                        ),
                        r.a.createElement(
                          'section',
                          {
                            className:
                              'App__personnel App__separate_top App__separate_bottom',
                          },
                          r.a.createElement(
                            'div',
                            {
                              className:
                                'App__section_header App__separate_top',
                              onClick: this.toggleExpandPersonnel,
                            },
                            r.a.createElement(
                              'div',
                              { className: 'App__fa_h1' },
                              V({
                                style: ''.concat(
                                  this.state.expandPersonnel ? 'minus' : 'plus'
                                ),
                              }),
                              r.a.createElement('h1', null, 'Personnel')
                            )
                          ),
                          this.state.expandPersonnel &&
                            r.a.createElement(Z, {
                              view: 'project',
                              project: this.state.project,
                            })
                        )
                      )
                    )
                  : r.a.createElement(l.a, { to: '/dashboard' });
              },
            },
          ]),
          t
        );
      })(n.Component);
      be.contextType = _;
      var je = Object(l.g)(be);
      a(226);
      function Ee() {
        return r.a.createElement(
          'section',
          { className: 'LandingPage' },
          r.a.createElement(
            'div',
            { className: 'LandingPage__hero_text' },
            r.a.createElement(
              'h1',
              null,
              r.a.createElement(
                'span',
                { className: 'LandingPage__t1' },
                'Dream Bigger,'
              ),
              r.a.createElement(
                'span',
                { className: 'LandingPage__t2' },
                'Build Faster,'
              ),
              r.a.createElement(
                'span',
                { className: 'LandingPage__t3' },
                'Work Less.'
              )
            ),
            r.a.createElement(
              'span',
              { className: 'LandingPage__blurb' },
              'Create, update, assign, track, and analyze your businesses projects securely on the cloud from any location with access to the web.'
            )
          ),
          r.a.createElement(
            s.b,
            { className: 'LandingPage__btn', to: '/register' },
            'Register Now!'
          )
        );
      }
      var _e = function(e) {
          var t = e.component,
            a = e.location,
            o = e.setPath,
            c = Object(F.a)(e, ['component', 'location', 'setPath']),
            s = Object(n.useContext)(_).currentUser;
          return (
            s && o(a.pathname),
            r.a.createElement(
              l.b,
              Object.assign({}, c, {
                render: function(e) {
                  return s
                    ? r.a.createElement(t, e)
                    : r.a.createElement(l.a, { to: '/' });
                },
              })
            )
          );
        },
        we = function(e) {
          var t = e.component,
            a = e.setPath,
            n = Object(F.a)(e, ['component', 'setPath']);
          return (
            localStorage.removeItem('path'),
            a(null),
            r.a.createElement(
              l.b,
              Object.assign({}, n, {
                render: function(e) {
                  return r.a.createElement(t, e);
                },
              })
            )
          );
        },
        ve =
          (a(227),
          Object(l.g)(function(e) {
            var t = !1,
              a = Object(n.useContext)(_).currentUser,
              o = Object(n.useState)({}),
              c = Object(i.a)(o, 2),
              l = c[0],
              u = c[1],
              d = Object(n.useState)([]),
              m = Object(i.a)(d, 2),
              h = m[0],
              f = m[1],
              g = Object(n.useState)([]),
              b = Object(i.a)(g, 2),
              j = b[0],
              w = b[1],
              v = Object(n.useState)(!0),
              x = Object(i.a)(v, 2),
              k = x[0],
              P = x[1],
              N = E.functions(),
              D = function() {
                var t;
                return p.a.async(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t = {}),
                            (n.prev = 1),
                            (n.next = 4),
                            p.a.awrap(
                              y
                                .getUser(e.match.params.id, a.org)
                                .then(function(e) {
                                  e.forEach(function(e) {
                                    t = {
                                      role: e.data().role,
                                      email: e.data().email,
                                      name: e.data().name,
                                      org: e.data().org,
                                    };
                                  });
                                })
                            )
                          );
                        case 4:
                          n.next = 10;
                          break;
                        case 6:
                          (n.prev = 6),
                            (n.t0 = n.catch(1)),
                            console.warn(n.t0),
                            M.a.fire({
                              title: 'Error!',
                              text:
                                "There was an issue loading this employee's information - please refresh the page and try again.",
                              icon: 'error',
                              confirmButtonText: 'Close',
                            });
                        case 10:
                          return n.abrupt('return', t);
                        case 11:
                        case 'end':
                          return n.stop();
                      }
                  },
                  null,
                  null,
                  [[1, 6]]
                );
              };
            return (
              Object(n.useEffect)(
                function() {
                  return (
                    (t = !0),
                    D().then(function(e) {
                      t && u(e),
                        (function(e) {
                          var a, n;
                          p.a.async(
                            function(r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    if ('project worker' !== e.role) {
                                      r.next = 12;
                                      break;
                                    }
                                    return (
                                      (r.prev = 1),
                                      (r.next = 4),
                                      p.a.awrap(
                                        y
                                          .getEmployeeProjects(e.name, e.org)
                                          .then(function(e) {
                                            var a = [];
                                            e.forEach(function(e) {
                                              a.push(e.data());
                                            }),
                                              t && f(a);
                                          })
                                      )
                                    );
                                  case 4:
                                    r.next = 10;
                                    break;
                                  case 6:
                                    (r.prev = 6),
                                      (r.t0 = r.catch(1)),
                                      console.warn(r.t0),
                                      M.a.fire({
                                        title: 'Error!',
                                        text:
                                          "There was an issue loading this employee's project information - please refresh the page and try again.",
                                        icon: 'error',
                                        confirmButtonText: 'Close',
                                      });
                                  case 10:
                                    r.next = 24;
                                    break;
                                  case 12:
                                    if ('project manager' !== e.role) {
                                      r.next = 24;
                                      break;
                                    }
                                    return (
                                      (r.prev = 13),
                                      (a = []),
                                      (n = []),
                                      (r.next = 18),
                                      p.a.awrap(
                                        y
                                          .getManagerProjects(e.name, e.org)
                                          .then(function(e) {
                                            e.forEach(function(e) {
                                              a.push(e.data());
                                            }),
                                              t && f(a);
                                          })
                                          .then(function() {
                                            y.getEmployeeProjects(
                                              e.name,
                                              e.org
                                            ).then(function(a) {
                                              a.forEach(function(t) {
                                                t.data().project_manager !==
                                                  e.name && n.push(t.data());
                                              }),
                                                t && w(n);
                                            });
                                          })
                                      )
                                    );
                                  case 18:
                                    r.next = 24;
                                    break;
                                  case 20:
                                    (r.prev = 20),
                                      (r.t1 = r.catch(13)),
                                      console.warn(r.t1),
                                      M.a.fire({
                                        title: 'Error!',
                                        text:
                                          "There was an issue loading this employee's project information - please refresh the page and try again.",
                                        icon: 'error',
                                        confirmButtonText: 'Close',
                                      });
                                  case 24:
                                  case 'end':
                                    return r.stop();
                                }
                            },
                            null,
                            null,
                            [
                              [1, 6],
                              [13, 20],
                            ]
                          );
                        })(e);
                    }),
                    function() {
                      t = !1;
                    }
                  );
                },
                [N]
              ),
              l && l.role
                ? r.a.createElement(
                    'section',
                    { className: 'Profile__container' },
                    r.a.createElement(
                      'div',
                      { className: 'App__org_header' },
                      r.a.createElement('h2', null, l.org),
                      r.a.createElement(
                        'span',
                        { className: 'App__date' },
                        new Date().toDateString()
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'Profile__main' },
                      r.a.createElement(
                        'section',
                        { className: 'Profile__user' },
                        r.a.createElement(
                          'div',
                          { className: 'App__section_header' },
                          r.a.createElement('h1', null, l.name),
                          a &&
                            'owner' === a.role &&
                            l &&
                            'project worker' === l.role &&
                            r.a.createElement(
                              'button',
                              {
                                className: 'Profile__promote_btn',
                                onClick: function(e) {
                                  return (function(e) {
                                    return p.a.async(function(a) {
                                      for (;;)
                                        switch ((a.prev = a.next)) {
                                          case 0:
                                            return (
                                              e.preventDefault(),
                                              (a.next = 3),
                                              p.a.awrap(
                                                N.httpsCallable('promoteUser')
                                              )
                                            );
                                          case 3:
                                            (0, a.sent)({
                                              email: l.email,
                                              org: l.org,
                                            }).then(function() {
                                              try {
                                                y.promoteUser(
                                                  l.org,
                                                  l.email
                                                ).then(function() {
                                                  return D().then(function(e) {
                                                    t && u(e);
                                                  });
                                                });
                                              } catch (e) {
                                                M.a.fire({
                                                  title: 'Error!',
                                                  text:
                                                    'Failed to promote employee.',
                                                  icon: 'error',
                                                  confirmButtonText: 'Close',
                                                });
                                              }
                                            });
                                          case 5:
                                          case 'end':
                                            return a.stop();
                                        }
                                    });
                                  })(e);
                                },
                              },
                              'Promote User'
                            )
                        ),
                        r.a.createElement(
                          'ul',
                          { className: 'Profile__user_info' },
                          r.a.createElement(
                            'li',
                            null,
                            r.a.createElement(
                              'span',
                              { className: 'Profile__bold' },
                              'Role:'
                            ),
                            ' ',
                            l.role
                          ),
                          r.a.createElement(
                            'li',
                            null,
                            r.a.createElement(
                              'span',
                              { className: 'Profile__bold' },
                              'Email:'
                            ),
                            l.email
                          ),
                          r.a.createElement(
                            'li',
                            null,
                            r.a.createElement(
                              'span',
                              { className: 'Profile__bold' },
                              'Org:'
                            ),
                            l.org
                          )
                        ),
                        'project worker' === l.role
                          ? r.a.createElement('h2', null, 'User Projects:')
                          : r.a.createElement('h2', null, 'Managing:'),
                        h.length > 0
                          ? r.a.createElement(
                              'ul',
                              { className: 'Profile__user_projects' },
                              h.map(function(e, t) {
                                return r.a.createElement(
                                  'li',
                                  { key: t },
                                  r.a.createElement(
                                    s.b,
                                    { to: '/project/'.concat(e.id) },
                                    e.name
                                  )
                                );
                              })
                            )
                          : r.a.createElement(
                              'ul',
                              { className: 'Profile__user_projects' },
                              r.a.createElement(
                                'li',
                                null,
                                'No Projects Assigned.'
                              )
                            ),
                        'project manager' === l.role && j.length > 0
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement('h2', null, 'Working:'),
                              r.a.createElement(
                                'ul',
                                { className: 'Profile__user_projects' },
                                j.map(function(e, t) {
                                  return r.a.createElement(
                                    'li',
                                    { key: t },
                                    r.a.createElement(
                                      s.b,
                                      { to: '/project/'.concat(e.id) },
                                      e.name
                                    )
                                  );
                                })
                              )
                            )
                          : ''
                      ),
                      r.a.createElement(
                        'section',
                        { className: 'App__personnel App__separate_top' },
                        r.a.createElement(
                          'div',
                          {
                            className: 'App__section_header',
                            onClick: function() {
                              return P(!k);
                            },
                          },
                          r.a.createElement(
                            'div',
                            { className: 'App__fa_h1' },
                            V({ style: ''.concat(k ? 'minus' : 'plus') }),
                            r.a.createElement('h1', null, 'Personnel')
                          )
                        ),
                        k && r.a.createElement(Z, null)
                      )
                    )
                  )
                : r.a.createElement(r.a.Fragment, null)
            );
          })),
        xe = (a(228), a(89)),
        ye = a.n(xe),
        ke =
          (a(229),
          function() {
            return r.a.createElement(
              'div',
              { className: 'LandingPage CatchAll' },
              r.a.createElement('img', { src: ye.a, alt: 'skyscraper' }),
              r.a.createElement('h3', { className: 'CatchAll__h3' }, 'Ruh Roh'),
              r.a.createElement(
                'span',
                { className: 'CatchAll__span' },
                "What you're looking for doesn't exist."
              )
            );
          }),
        Pe = Object(l.g)(function(e) {
          var t = Object(n.useContext)(_).currentUser,
            a = Object(n.useState)(!1),
            o = Object(i.a)(a, 2),
            c = o[0],
            s =
              (o[1],
              Object(n.useState)(function() {
                return localStorage.getItem('path')
                  ? localStorage.getItem('path')
                  : null;
              })),
            u = Object(i.a)(s, 2),
            p = u[0],
            d = u[1];
          return (
            Object(n.useEffect)(
              function() {
                (localStorage.getItem('path') || p) &&
                  localStorage.setItem('path', p);
              },
              [p]
            ),
            Object(n.useEffect)(
              function() {
                p && t && p !== e.location.pathname && e.history.push(p);
              },
              [t, p]
            ),
            c
              ? r.a.createElement(r.a.Fragment, null)
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    'header',
                    null,
                    r.a.createElement(ce, {
                      userName: t && t.name,
                      role: t && t.role,
                      setPath: d,
                    })
                  ),
                  r.a.createElement(
                    'main',
                    { className: 'App__main' },
                    r.a.createElement(
                      l.d,
                      null,
                      r.a.createElement(l.b, {
                        exact: !0,
                        path: '/',
                        component: Ee,
                      }),
                      r.a.createElement(we, {
                        exact: !0,
                        path: '/login',
                        setPath: d,
                        component: se,
                      }),
                      r.a.createElement(_e, {
                        location: e.location,
                        setPath: d,
                        path: '/profile/:id',
                        component: function(e) {
                          return r.a.createElement(ve, {
                            id: e.match.params.id,
                          });
                        },
                      }),
                      r.a.createElement(we, {
                        path: '/register',
                        setPath: d,
                        component: function() {
                          return r.a.createElement(ie, null);
                        },
                      }),
                      r.a.createElement(_e, {
                        exact: !0,
                        path: '/dashboard',
                        location: e.location,
                        setPath: d,
                        component: X,
                      }),
                      r.a.createElement(_e, {
                        exact: !0,
                        path: '/project/:id',
                        location: e.location,
                        setPath: d,
                        component: function(e) {
                          return r.a.createElement(je, {
                            id: e.match.params.id,
                          });
                        },
                      }),
                      r.a.createElement(we, {
                        exact: !0,
                        path: '*',
                        setPath: d,
                        component: ke,
                      })
                    )
                  )
                )
          );
        }),
        Ne = a(39);
      a(230);
      Ne.b.add(
        W.c,
        W.b,
        W.a,
        W.i,
        W.h,
        W.e,
        W.d,
        W.g,
        W.j,
        Y.b,
        Y.c,
        W.a,
        Y.d,
        W.f,
        W.l,
        W.k
      ),
        c.a.render(
          r.a.createElement(
            s.a,
            null,
            r.a.createElement(
              function(e) {
                var t = e.children,
                  a = Object(n.useState)(null),
                  o = Object(i.a)(a, 2),
                  c = o[0],
                  s = o[1];
                return (
                  Object(n.useEffect)(function() {
                    E.auth().onAuthStateChanged(function(e) {
                      e
                        ? E.auth()
                            .currentUser.getIdTokenResult()
                            .then(function(e) {
                              e.claims ? s(e.claims) : alert('ruh roh');
                            })
                            .catch(function(e) {
                              console.warn(e);
                            })
                        : s(null);
                    });
                  }, []),
                  r.a.createElement(
                    _.Provider,
                    { value: { currentUser: c } },
                    t
                  )
                );
              },
              null,
              r.a.createElement(Pe, null)
            )
          ),
          document.getElementById('root')
        );
    },
    87: function(e, t, a) {
      e.exports = a.p + 'static/media/lazy.25ad2c34.svg';
    },
    89: function(e, t, a) {
      e.exports = a.p + 'static/media/skyscraper.ceda3298.svg';
    },
    91: function(e, t, a) {
      e.exports = a(231);
    },
    96: function(e, t, a) {},
  },
  [[91, 1, 2]],
]);
//# sourceMappingURL=main.df7f69ec.chunk.js.map
