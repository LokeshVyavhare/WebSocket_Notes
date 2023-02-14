import { addBugData } from './Action';
import { AddBug, UpdateBugs } from './ActionTypes'

const iState = {
        critical: {
            id:"critical",
            bugs:[
                {
                    id:0,
                    bug:"bug0"
                },
                {
                    id:1,
                    bug:"bug1"
                },
                {
                    id:2,
                    bug:"bug2"
                },
            ]
        },
        major:{
            id:"major",
            bugs:[
                {
                    id:0,
                    bug:"bug0"
                },
                {
                    id:1,
                    bug:"bug1"
                },
                {
                    id:2,
                    bug:"bug2"
                },
            ]
        },
        medium: {
            id:"medium",
            bugs:[
                {
                    id:0,
                    bug:"bug0"
                },
                {
                    id:1,
                    bug:"bug1"
                },
                {
                    id:2,
                    bug:"bug2"
                },
            ]
        },
        low: {
            id:"low",
            bugs:[
                {
                    id:0,
                    bug:"bug0"
                },
                {
                    id:1,
                    bug:"bug1"
                },
                {
                    id:2,
                    bug:"bug2"
                },
            ]
        },
}

export const BugReducer = (state = iState, { type, payload }) => {
    switch (type) {
        case UpdateBugs:{
            return payload;
        }


        default: {
            return state;
        }
    }
}