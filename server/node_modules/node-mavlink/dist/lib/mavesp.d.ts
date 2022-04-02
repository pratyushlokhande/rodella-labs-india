/// <reference types="node" />
import { EventEmitter } from 'events';
import { uint8_t, MavLinkData } from 'mavlink-mappings';
/**
 * Encapsulation of communication with MavEsp8266
 */
export declare class MavEsp8266 extends EventEmitter {
    private input;
    private socket;
    private ip;
    private sendPort;
    private seq;
    constructor();
    /**
     * Start communication with the controller via MAVESP2866
     *
     * @param receivePort port to receive messages on (default: 14550)
     * @param sendPort port to send messages to (default: 14555)
     */
    start(receivePort?: number, sendPort?: number): Promise<unknown>;
    /**
     * Send a packet
     *
     * @param msg message to send
     * @param sysid system id
     * @param compid component id
     */
    send(msg: MavLinkData, sysid?: uint8_t, compid?: uint8_t): void;
    /**
     * Send a signed packet
     *
     * @param msg message to send
     * @param sysid system id
     * @param compid component id
     * @param linkId link id for the signature
     */
    sendSigned(msg: MavLinkData, key: Buffer, linkId?: uint8_t, sysid?: uint8_t, compid?: uint8_t): void;
    /**
     * Send raw data over the socket. Useful for custom implementation of data sending
     *
     * @param buffer buffer to send
     */
    sendBuffer(buffer: Buffer): void;
    private processIncommingUDPData;
    private processIncommingPacket;
}
