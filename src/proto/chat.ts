// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "chat.proto" (package "main", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message main.ChatMessage
 */
export interface ChatMessage {
    /**
     * @generated from protobuf field: string from = 1;
     */
    from: string;
    /**
     * @generated from protobuf field: string msg = 2;
     */
    msg: string;
    /**
     * @generated from protobuf field: string time = 3;
     */
    time: string;
}
/**
 * @generated from protobuf message main.User
 */
export interface User {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
/**
 * @generated from protobuf message main.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message main.UserList
 */
export interface UserList {
    /**
     * @generated from protobuf field: repeated main.User users = 1;
     */
    users: User[];
}
/**
 * @generated from protobuf message main.JoinResponse
 */
export interface JoinResponse {
    /**
     * @generated from protobuf field: int32 error = 1;
     */
    error: number;
    /**
     * @generated from protobuf field: string msg = 2;
     */
    msg: string;
}
/**
 * @generated from protobuf message main.ReceiveMsgRequest
 */
export interface ReceiveMsgRequest {
    /**
     * @generated from protobuf field: string user = 1;
     */
    user: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChatMessage$Type extends MessageType<ChatMessage> {
    constructor() {
        super("main.ChatMessage", [
            { no: 1, name: "from", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ChatMessage>): ChatMessage {
        const message = { from: "", msg: "", time: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChatMessage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChatMessage): ChatMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string from */ 1:
                    message.from = reader.string();
                    break;
                case /* string msg */ 2:
                    message.msg = reader.string();
                    break;
                case /* string time */ 3:
                    message.time = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ChatMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string from = 1; */
        if (message.from !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.from);
        /* string msg = 2; */
        if (message.msg !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msg);
        /* string time = 3; */
        if (message.time !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.ChatMessage
 */
export const ChatMessage = new ChatMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("main.User", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = { id: "", name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("main.Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserList$Type extends MessageType<UserList> {
    constructor() {
        super("main.UserList", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<UserList>): UserList {
        const message = { users: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserList): UserList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated main.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated main.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.UserList
 */
export const UserList = new UserList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinResponse$Type extends MessageType<JoinResponse> {
    constructor() {
        super("main.JoinResponse", [
            { no: 1, name: "error", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<JoinResponse>): JoinResponse {
        const message = { error: 0, msg: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JoinResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JoinResponse): JoinResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 error */ 1:
                    message.error = reader.int32();
                    break;
                case /* string msg */ 2:
                    message.msg = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JoinResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 error = 1; */
        if (message.error !== 0)
            writer.tag(1, WireType.Varint).int32(message.error);
        /* string msg = 2; */
        if (message.msg !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.JoinResponse
 */
export const JoinResponse = new JoinResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReceiveMsgRequest$Type extends MessageType<ReceiveMsgRequest> {
    constructor() {
        super("main.ReceiveMsgRequest", [
            { no: 1, name: "user", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ReceiveMsgRequest>): ReceiveMsgRequest {
        const message = { user: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReceiveMsgRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReceiveMsgRequest): ReceiveMsgRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user */ 1:
                    message.user = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ReceiveMsgRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user = 1; */
        if (message.user !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.user);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message main.ReceiveMsgRequest
 */
export const ReceiveMsgRequest = new ReceiveMsgRequest$Type();
/**
 * @generated ServiceType for protobuf service main.ChatService
 */
export const ChatService = new ServiceType("main.ChatService", [
    { name: "join", options: {}, I: User, O: JoinResponse },
    { name: "sendMsg", options: {}, I: ChatMessage, O: Empty },
    { name: "receiveMsg", serverStreaming: true, options: {}, I: ReceiveMsgRequest, O: ChatMessage },
    { name: "getAllUsers", options: {}, I: Empty, O: UserList }
]);
