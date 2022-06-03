import { Linear } from "../server/linear/Linear.js";
import { WebRTC } from "../server/WebRTC/WebRTC.js";

export const Test = () => {
    return [
        Linear.createElement('h1', null, 'This is a test of WebRTCPeerConection page'),
        Linear.createElement('button', {action: {type: 'click', listener: () => {WebRTC.connectPeerOne()}}}, 'Create channel'),
        Linear.createElement('button', {action: {type: 'click', listener: () => {WebRTC.connectPeerTwo()}}}, 'Connect channel')
    ]
}