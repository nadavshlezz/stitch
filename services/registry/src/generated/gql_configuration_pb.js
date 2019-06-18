/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.gqlconfig.GqlAuthProvider', null, global);
goog.exportSymbol('proto.gqlconfig.GqlConfigurationMessage', null, global);
goog.exportSymbol('proto.gqlconfig.GqlConfigurationSubscribeParams', null, global);
goog.exportSymbol('proto.gqlconfig.GqlEndpoint', null, global);
goog.exportSymbol('proto.gqlconfig.GqlEndpointAuthentication', null, global);
goog.exportSymbol('proto.gqlconfig.GqlSchema', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlConfigurationSubscribeParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gqlconfig.GqlConfigurationSubscribeParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlConfigurationSubscribeParams.displayName = 'proto.gqlconfig.GqlConfigurationSubscribeParams';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlConfigurationSubscribeParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlConfigurationSubscribeParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlConfigurationSubscribeParams}
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlConfigurationSubscribeParams;
  return proto.gqlconfig.GqlConfigurationSubscribeParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlConfigurationSubscribeParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlConfigurationSubscribeParams}
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlConfigurationSubscribeParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlConfigurationSubscribeParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlConfigurationSubscribeParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlConfigurationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gqlconfig.GqlConfigurationMessage.repeatedFields_, null);
};
goog.inherits(proto.gqlconfig.GqlConfigurationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlConfigurationMessage.displayName = 'proto.gqlconfig.GqlConfigurationMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gqlconfig.GqlConfigurationMessage.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlConfigurationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlConfigurationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlConfigurationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    schema: (f = msg.getSchema()) && proto.gqlconfig.GqlSchema.toObject(includeInstance, f),
    endpointsList: jspb.Message.toObjectList(msg.getEndpointsList(),
    proto.gqlconfig.GqlEndpoint.toObject, includeInstance),
    authProvidersList: jspb.Message.toObjectList(msg.getAuthProvidersList(),
    proto.gqlconfig.GqlAuthProvider.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlConfigurationMessage}
 */
proto.gqlconfig.GqlConfigurationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlConfigurationMessage;
  return proto.gqlconfig.GqlConfigurationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlConfigurationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlConfigurationMessage}
 */
proto.gqlconfig.GqlConfigurationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gqlconfig.GqlSchema;
      reader.readMessage(value,proto.gqlconfig.GqlSchema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    case 2:
      var value = new proto.gqlconfig.GqlEndpoint;
      reader.readMessage(value,proto.gqlconfig.GqlEndpoint.deserializeBinaryFromReader);
      msg.addEndpoints(value);
      break;
    case 3:
      var value = new proto.gqlconfig.GqlAuthProvider;
      reader.readMessage(value,proto.gqlconfig.GqlAuthProvider.deserializeBinaryFromReader);
      msg.addAuthProviders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlConfigurationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlConfigurationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlConfigurationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.gqlconfig.GqlSchema.serializeBinaryToWriter
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.gqlconfig.GqlEndpoint.serializeBinaryToWriter
    );
  }
  f = message.getAuthProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.gqlconfig.GqlAuthProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional GqlSchema schema = 1;
 * @return {?proto.gqlconfig.GqlSchema}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.getSchema = function() {
  return /** @type{?proto.gqlconfig.GqlSchema} */ (
    jspb.Message.getWrapperField(this, proto.gqlconfig.GqlSchema, 1));
};


/** @param {?proto.gqlconfig.GqlSchema|undefined} value */
proto.gqlconfig.GqlConfigurationMessage.prototype.setSchema = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gqlconfig.GqlConfigurationMessage.prototype.clearSchema = function() {
  this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated GqlEndpoint endpoints = 2;
 * @return {!Array<!proto.gqlconfig.GqlEndpoint>}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.getEndpointsList = function() {
  return /** @type{!Array<!proto.gqlconfig.GqlEndpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gqlconfig.GqlEndpoint, 2));
};


/** @param {!Array<!proto.gqlconfig.GqlEndpoint>} value */
proto.gqlconfig.GqlConfigurationMessage.prototype.setEndpointsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.gqlconfig.GqlEndpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gqlconfig.GqlEndpoint}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.addEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gqlconfig.GqlEndpoint, opt_index);
};


proto.gqlconfig.GqlConfigurationMessage.prototype.clearEndpointsList = function() {
  this.setEndpointsList([]);
};


/**
 * repeated GqlAuthProvider auth_providers = 3;
 * @return {!Array<!proto.gqlconfig.GqlAuthProvider>}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.getAuthProvidersList = function() {
  return /** @type{!Array<!proto.gqlconfig.GqlAuthProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gqlconfig.GqlAuthProvider, 3));
};


/** @param {!Array<!proto.gqlconfig.GqlAuthProvider>} value */
proto.gqlconfig.GqlConfigurationMessage.prototype.setAuthProvidersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.gqlconfig.GqlAuthProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gqlconfig.GqlAuthProvider}
 */
proto.gqlconfig.GqlConfigurationMessage.prototype.addAuthProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gqlconfig.GqlAuthProvider, opt_index);
};


proto.gqlconfig.GqlConfigurationMessage.prototype.clearAuthProvidersList = function() {
  this.setAuthProvidersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gqlconfig.GqlSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlSchema.displayName = 'proto.gqlconfig.GqlSchema';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    gql: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlSchema}
 */
proto.gqlconfig.GqlSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlSchema;
  return proto.gqlconfig.GqlSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlSchema}
 */
proto.gqlconfig.GqlSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGql(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGql();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string gql = 1;
 * @return {string}
 */
proto.gqlconfig.GqlSchema.prototype.getGql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlSchema.prototype.setGql = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gqlconfig.GqlEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlEndpoint.displayName = 'proto.gqlconfig.GqlEndpoint';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    auth: (f = msg.getAuth()) && proto.gqlconfig.GqlEndpointAuthentication.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlEndpoint}
 */
proto.gqlconfig.GqlEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlEndpoint;
  return proto.gqlconfig.GqlEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlEndpoint}
 */
proto.gqlconfig.GqlEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = new proto.gqlconfig.GqlEndpointAuthentication;
      reader.readMessage(value,proto.gqlconfig.GqlEndpointAuthentication.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.gqlconfig.GqlEndpointAuthentication.serializeBinaryToWriter
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.gqlconfig.GqlEndpoint.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlEndpoint.prototype.setHost = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GqlEndpointAuthentication auth = 2;
 * @return {?proto.gqlconfig.GqlEndpointAuthentication}
 */
proto.gqlconfig.GqlEndpoint.prototype.getAuth = function() {
  return /** @type{?proto.gqlconfig.GqlEndpointAuthentication} */ (
    jspb.Message.getWrapperField(this, proto.gqlconfig.GqlEndpointAuthentication, 2));
};


/** @param {?proto.gqlconfig.GqlEndpointAuthentication|undefined} value */
proto.gqlconfig.GqlEndpoint.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gqlconfig.GqlEndpoint.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gqlconfig.GqlEndpoint.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlEndpointAuthentication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gqlconfig.GqlEndpointAuthentication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlEndpointAuthentication.displayName = 'proto.gqlconfig.GqlEndpointAuthentication';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlEndpointAuthentication.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlEndpointAuthentication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlEndpointAuthentication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlEndpointAuthentication.toObject = function(includeInstance, msg) {
  var f, obj = {
    authType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authority: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlEndpointAuthentication}
 */
proto.gqlconfig.GqlEndpointAuthentication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlEndpointAuthentication;
  return proto.gqlconfig.GqlEndpointAuthentication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlEndpointAuthentication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlEndpointAuthentication}
 */
proto.gqlconfig.GqlEndpointAuthentication.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthority(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlEndpointAuthentication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlEndpointAuthentication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlEndpointAuthentication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlEndpointAuthentication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthority();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string auth_type = 1;
 * @return {string}
 */
proto.gqlconfig.GqlEndpointAuthentication.prototype.getAuthType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlEndpointAuthentication.prototype.setAuthType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authority = 2;
 * @return {string}
 */
proto.gqlconfig.GqlEndpointAuthentication.prototype.getAuthority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlEndpointAuthentication.prototype.setAuthority = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scope = 3;
 * @return {string}
 */
proto.gqlconfig.GqlEndpointAuthentication.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlEndpointAuthentication.prototype.setScope = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gqlconfig.GqlAuthProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gqlconfig.GqlAuthProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gqlconfig.GqlAuthProvider.displayName = 'proto.gqlconfig.GqlAuthProvider';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gqlconfig.GqlAuthProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.gqlconfig.GqlAuthProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gqlconfig.GqlAuthProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlAuthProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    authType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authority: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gqlconfig.GqlAuthProvider}
 */
proto.gqlconfig.GqlAuthProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gqlconfig.GqlAuthProvider;
  return proto.gqlconfig.GqlAuthProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gqlconfig.GqlAuthProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gqlconfig.GqlAuthProvider}
 */
proto.gqlconfig.GqlAuthProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthority(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gqlconfig.GqlAuthProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gqlconfig.GqlAuthProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gqlconfig.GqlAuthProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gqlconfig.GqlAuthProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthority();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string auth_type = 1;
 * @return {string}
 */
proto.gqlconfig.GqlAuthProvider.prototype.getAuthType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlAuthProvider.prototype.setAuthType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authority = 2;
 * @return {string}
 */
proto.gqlconfig.GqlAuthProvider.prototype.getAuthority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlAuthProvider.prototype.setAuthority = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_id = 3;
 * @return {string}
 */
proto.gqlconfig.GqlAuthProvider.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlAuthProvider.prototype.setClientId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string client_secret = 4;
 * @return {string}
 */
proto.gqlconfig.GqlAuthProvider.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.gqlconfig.GqlAuthProvider.prototype.setClientSecret = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.gqlconfig);
