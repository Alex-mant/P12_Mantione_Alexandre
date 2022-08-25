const USER_MAIN_DATA = [
  {
      id: 22,
      userInfos: {
          firstName: 'MockedUser1',
          lastName: 'Mocked',
          age: 100,
      },
      todayScore: 0.25,
      keyData: {
          calorieCount: 1230,
          proteinCount: 165,
          carbohydrateCount: 232,
          lipidCount: 25
      }
  },
  {
      id: 28,
      userInfos: {
          firstName: 'MockedUser2',
          lastName: 'Mocked',
          age: 100,
      },
      score: 0.7,
      keyData: {
          calorieCount: 3500,
          proteinCount: 60,
          carbohydrateCount: 120,
          lipidCount: 58
      }
  }
]

const USER_ACTIVITY = [
  {
      userId: 22,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 84,
              calories: 263
          },
          {
              day: '2020-07-02',
              kilogram: 82,
              calories: 245
          },
          {
              day: '2020-07-03',
              kilogram: 81,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 81,
              calories: 254
          },
          {
              day: '2020-07-05',
              kilogram: 80,
              calories: 124
          },
          {
              day: '2020-07-06',
              kilogram: 78,
              calories: 165
          },
          {
              day: '2020-07-07',
              kilogram: 76,
              calories: 462
          }
      ]
  },
  {
      userId: 28,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 72,
              calories: 223
          },
          {
              day: '2020-07-02',
              kilogram: 69,
              calories: 254
          },
          {
              day: '2020-07-03',
              kilogram: 70,
              calories: 264
          },
          {
              day: '2020-07-04',
              kilogram: 70,
              calories: 343
          },
          {
              day: '2020-07-05',
              kilogram: 69,
              calories: 123
          },
          {
              day: '2020-07-06',
              kilogram: 67,
              calories: 165
          },
          {
              day: '2020-07-07',
              kilogram: 66,
              calories: 412
          }
      ]
  }
]


const USER_AVERAGE_SESSIONS = [
  {
      userId: 22,
      sessions: [
          {
              day: 1,
              sessionLength: 35
          },
          {
              day: 2,
              sessionLength: 34
          },
          {
              day: 3,
              sessionLength: 45
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 23
          },
          {
              day: 6,
              sessionLength: 26
          },
          {
              day: 7,
              sessionLength: 60
          }
      ]
  },
  {
      userId: 28,
      sessions: [
          {
              day: 1,
              sessionLength: 36
          },
          {
              day: 2,
              sessionLength: 47
          },
          {
              day: 3,
              sessionLength: 50
          },
          {
              day: 4,
              sessionLength: 40
          },
          {
              day: 5,
              sessionLength: 37
          },
          {
              day: 6,
              sessionLength: 50
          },
          {
              day: 7,
              sessionLength: 70
          }
      ]
  }
]


const USER_PERFORMANCE = [
  {
      userId: 22,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 82,
              kind: 1
          },
          {
              value: 150,
              kind: 2
          },
          {
              value: 130,
              kind: 3
          },
          {
              value: 120,
              kind: 4
          },
          {
              value: 200,
              kind: 5
          },
          {
              value: 80,
              kind: 6
          }
      ]
  },
  {
      userId: 28,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 210,
              kind: 1
          },
          {
              value: 260,
              kind: 2
          },
          {
              value: 180,
              kind: 3
          },
          {
              value: 190,
              kind: 4
          },
          {
              value: 168,
              kind: 5
          },
          {
              value: 220,
              kind: 6
          }
      ]
  }
]

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
}
