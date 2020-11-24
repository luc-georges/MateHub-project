import {expect, assert} from 'chai'

import authReducer,{initialState} from '../../src/store/reducers/authReducer'
import {
    getPersonnalDataSuccess,
    getPersonnalDataError,
    authChangeField,
    modifyPersonnalDataChangeField,
    loginSubmitSuccess
  } from '../../src/store/actions/authActions';

describe('auth reducer', ()=>{
    it('should be a function', ()=>{
        expect(authReducer).to.be.a('function');
    });
  
        it('should return an object', ()=>{
            expect(authReducer()).to.be.an('Object');
            
        })
        it('should return the initial state',()=>{
    
            expect(authReducer()).to.be.equal(initialState);
        })
    })
describe('with action',()=>{
    it('getPersonnalData should return a correct  state', ()=>{

        const data = {
            _user_id: 1,
            _nickname: 'test1',
            _age: 23,
            _description: 'description test 1',
            _avatar: 'avatar.jpg',
            _banner: 'banner.jpg',
            _games: [
              {
                game_id: 1,
                game_name: 'league of legends',
                ign: {
                  id: '0123456789',
                  accountId: '987654321',
                  puuid: '0123454321',
                  name: 'nametest1',
                  profileIconId: 'test.iconid',
                  revisionDate: '20/11/2020',
                  summonerLevel: 233,
                },
                stats: {
                  leagueId: 1,
                  queueType: 'ranked',
                  tier: 'gold',
                  rank: 'VII',
                  summonerId: 111111111,
                  summonerName: 1111222222,
                  leaguePoints: 258,
                  wins: 10,
                  losses: 0,
                  veteran: false,
                  inactive: false,
                  freshBlood: false,
                  hotStreak: false,
                },
              },
            ],
            _event_created: [
              {
                event_id: 1,
                game_name: 'league of legends',
                game_id: 1,
                event_time: '22/11/2020',
                duration: 3,
                end: "22/11/2020",
                player_count: 3,
                player_max: 5,
                description: 'event description',
                status: 0,
                rank: 'Gold VII',
                lang: [
                  {
                    id: 1,
                    label: 'FR',
                    icon: 'fr.ico',
                  },
                ],
                vocal: 'discord',
              },
            ],
            has_events: [
                {
                    event_id: 2,
                    game_name: 'league of legends',
                    game_id: 1,
                    event_time: '23/11/2020',
                    duration: 3,
                    end: "23/11/2020",
                    player_count: 3,
                    player_max: 5,
                    description: 'event description',
                    status: 0,
                    rank: 'Gold VII',
                    lang: [
                      {
                        id: 1,
                        label: 'FR',
                        icon: 'fr.ico',
                      },
                    ],
                    vocal: 'discord',
                  },
            ],};
        const fakeAction = getPersonnalDataSuccess(data);
        const modifiedState = authReducer(initialState, fakeAction);
          expect(modifiedState).to.be.eql({
            loginData: {
                email: '',
                password: '',
              }, 
            isLogged: false,
            nickname: '',
            loginErrorMessage: '',
            connectedUserId: '',
            personnalData:data,
            modifyPersonnalData: {},
            error: '',
          });
    })
    it('getPersonnalDataError should return the correct error',()=>{
        const error = 'error test';
        const fakeError = getPersonnalDataError(error)
        const modifiedStateError = authReducer(initialState,fakeError)
        expect(modifiedStateError).to.be.eql({
            loginData: {
                email: '',
                password: '',
              }, 
            isLogged: false,
            nickname: '',
            loginErrorMessage: '',
            connectedUserId: '',
            personnalData:{
                _user_id: '',
                _nickname: '',
                _age: '',
                _description: '',
                _avatar: '',
                _banner: '',
                _games: [
                  {
                    game_id: '',
                    game_name: '',
                    ign: {
                      id: '',
                      accountId: '',
                      puuid: '',
                      name: '',
                      profileIconId: '',
                      revisionDate: '',
                      summonerLevel: '',
                    },
                    stats: {
                      leagueId: '',
                      queueType: '',
                      tier: '',
                      rank: '',
                      summonerId: '',
                      summonerName: '',
                      leaguePoints: '',
                      wins: '',
                      losses: '',
                      veteran: false,
                      inactive: false,
                      freshBlood: false,
                      hotStreak: false,
                    },
                  },
                ],
                _event_created: [
                  {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    lang: [
                      {
                        id: '',
                        label: '',
                        icon: '',
                      },
                    ],
                    vocal: '',
                  },
                ],
                has_events: [
                  {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    message: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    Lang: [
                      {
                        id: '',
                        label: '',
                        icon: '',
                      },
                    ],
                    vocal: '',
                  },
                ],
              },
            modifyPersonnalData: {},
            error: 'error test',
        })
    })
    it('authChangeField should return the correct state with modified login',()=>{
        const changedData = {email:'testdatachanged'};
        const fakeChangeField = authChangeField(changedData)
        const modifiedStateLogin = authReducer(initialState,fakeChangeField)
        expect(modifiedStateLogin).to.be.eql({
            loginData: {
                email: 'testdatachanged',
                password: '',
                }, 
            isLogged: false,
            nickname: '',
            loginErrorMessage: '',
            connectedUserId: '',
            personnalData:{
                _user_id: '',
                _nickname: '',
                _age: '',
                _description: '',
                _avatar: '',
                _banner: '',
                _games: [
                    {
                    game_id: '',
                    game_name: '',
                    ign: {
                        id: '',
                        accountId: '',
                        puuid: '',
                        name: '',
                        profileIconId: '',
                        revisionDate: '',
                        summonerLevel: '',
                    },
                    stats: {
                        leagueId: '',
                        queueType: '',
                        tier: '',
                        rank: '',
                        summonerId: '',
                        summonerName: '',
                        leaguePoints: '',
                        wins: '',
                        losses: '',
                        veteran: false,
                        inactive: false,
                        freshBlood: false,
                        hotStreak: false,
                    },
                    },
                ],
                _event_created: [
                    {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    lang: [
                        {
                        id: '',
                        label: '',
                        icon: '',
                        },
                    ],
                    vocal: '',
                    },
                ],
                has_events: [
                    {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    message: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    Lang: [
                        {
                        id: '',
                        label: '',
                        icon: '',
                        },
                    ],
                    vocal: '',
                    },
                ],
                },
            modifyPersonnalData: {},
            error: '',
        })})
        it('modifyPersonnalDataChangeField should return the correct state with modified login',()=>{
            const changedDataLogin = {email:'testdatachanged'};
            const fakeChangeFieldLogin = modifyPersonnalDataChangeField(changedDataLogin)
            const modifiedStateLogin = authReducer(initialState,fakeChangeFieldLogin)
            expect(modifiedStateLogin.modifyPersonnalData).to.be.an('object')
            expect(modifiedStateLogin).to.eql({
            loginData: {
                email: '',
                password: '',
                }, 
            isLogged: false,
            nickname: '',
            loginErrorMessage: '',
            connectedUserId: '',
            personnalData:{
                _user_id: '',
                _nickname: '',
                _age: '',
                _description: '',
                _avatar: '',
                _banner: '',
                _games: [
                    {
                    game_id: '',
                    game_name: '',
                    ign: {
                        id: '',
                        accountId: '',
                        puuid: '',
                        name: '',
                        profileIconId: '',
                        revisionDate: '',
                        summonerLevel: '',
                    },
                    stats: {
                        leagueId: '',
                        queueType: '',
                        tier: '',
                        rank: '',
                        summonerId: '',
                        summonerName: '',
                        leaguePoints: '',
                        wins: '',
                        losses: '',
                        veteran: false,
                        inactive: false,
                        freshBlood: false,
                        hotStreak: false,
                    },
                    },
                ],
                _event_created: [
                    {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    lang: [
                        {
                        id: '',
                        label: '',
                        icon: '',
                        },
                    ],
                    vocal: '',
                    },
                ],
                has_events: [
                    {
                    event_id: '',
                    game_name: '',
                    game_id: '',
                    message: '',
                    event_time: '',
                    duration: '',
                    end: '',
                    player_count: '',
                    player_max: '',
                    description: '',
                    status: '',
                    rank: '',
                    Lang: [
                        {
                        id: '',
                        label: '',
                        icon: '',
                        },
                    ],
                    vocal: '',
                    },
                ],
                },
            modifyPersonnalData: changedDataLogin,
            error: '',
        })
            expect(modifiedStateLogin.modifyPersonnalData).to.have.any.keys('email','password');
 
    });
    it('loginSubmitSuccess should return the correct state with modified login',()=>{
        const SubmitedLoginData = 1
        const SubmitedLogin = loginSubmitSuccess(SubmitedLoginData);
        
        const modifiedStateLogin = authReducer(initialState, SubmitedLogin );

        expect(modifiedStateLogin).to.eql({ loginData: {
            email: '',
            password: '',
            }, 
        isLogged: true,
        nickname: undefined,
        loginErrorMessage: '',
        connectedUserId: 1,
        personnalData:{
            _user_id: '',
            _nickname: '',
            _age: '',
            _description: '',
            _avatar: '',
            _banner: '',
            _games: [
                {
                game_id: '',
                game_name: '',
                ign: {
                    id: '',
                    accountId: '',
                    puuid: '',
                    name: '',
                    profileIconId: '',
                    revisionDate: '',
                    summonerLevel: '',
                },
                stats: {
                    leagueId: '',
                    queueType: '',
                    tier: '',
                    rank: '',
                    summonerId: '',
                    summonerName: '',
                    leaguePoints: '',
                    wins: '',
                    losses: '',
                    veteran: false,
                    inactive: false,
                    freshBlood: false,
                    hotStreak: false,
                },
                },
            ],
            _event_created: [
                {
                event_id: '',
                game_name: '',
                game_id: '',
                event_time: '',
                duration: '',
                end: '',
                player_count: '',
                player_max: '',
                description: '',
                status: '',
                rank: '',
                lang: [
                    {
                    id: '',
                    label: '',
                    icon: '',
                    },
                ],
                vocal: '',
                },
            ],
            has_events: [
                {
                event_id: '',
                game_name: '',
                game_id: '',
                message: '',
                event_time: '',
                duration: '',
                end: '',
                player_count: '',
                player_max: '',
                description: '',
                status: '',
                rank: '',
                Lang: [
                    {
                    id: '',
                    label: '',
                    icon: '',
                    },
                ],
                vocal: '',
                },
            ],
            },
        modifyPersonnalData: {},
        error: '',
    })
      
    })
    })




    
