"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTRY = exports.SensorAirflowAngles = exports.SatcomLinkStatus = exports.GsmLinkStatus = exports.SensPowerBoard = exports.SensorpodStatus = exports.FwSoaringData = exports.SensBatmon = exports.SensAtmos = exports.AslObctrl = exports.EkfExt = exports.AsluavStatus = exports.AslctrlDebug = exports.AslctrlData = exports.SensMppt = exports.SensPower = exports.CommandLongStamped = exports.CommandIntStamped = exports.GsmModemType = exports.GsmLinkType = exports.MavCmd = void 0;
const mavlink_1 = require("./mavlink");
/**
 * MAV_CMD
 */
var MavCmd;
(function (MavCmd) {
    MavCmd[MavCmd["RESET_MPPT"] = 40001] = "RESET_MPPT";
    MavCmd[MavCmd["PAYLOAD_CONTROL"] = 40002] = "PAYLOAD_CONTROL";
})(MavCmd = exports.MavCmd || (exports.MavCmd = {}));
/**
 * GSM_LINK_TYPE
 */
var GsmLinkType;
(function (GsmLinkType) {
    GsmLinkType[GsmLinkType["NONE"] = 0] = "NONE";
    GsmLinkType[GsmLinkType["UNKNOWN"] = 1] = "UNKNOWN";
    GsmLinkType[GsmLinkType["GSM_LINK_TYPE_2G"] = 2] = "GSM_LINK_TYPE_2G";
    GsmLinkType[GsmLinkType["GSM_LINK_TYPE_3G"] = 3] = "GSM_LINK_TYPE_3G";
    GsmLinkType[GsmLinkType["GSM_LINK_TYPE_4G"] = 4] = "GSM_LINK_TYPE_4G";
})(GsmLinkType = exports.GsmLinkType || (exports.GsmLinkType = {}));
/**
 * GSM_MODEM_TYPE
 */
var GsmModemType;
(function (GsmModemType) {
    GsmModemType[GsmModemType["UNKNOWN"] = 0] = "UNKNOWN";
    GsmModemType[GsmModemType["HUAWEI_E3372"] = 1] = "HUAWEI_E3372";
})(GsmModemType = exports.GsmModemType || (exports.GsmModemType = {}));
/**
 * Message encoding a command with parameters as scaled integers and additional metadata. Scaling
 * depends on the actual command value.
 */
class CommandIntStamped extends mavlink_1.MavLinkData {
}
exports.CommandIntStamped = CommandIntStamped;
CommandIntStamped.MSG_ID = 223;
CommandIntStamped.MSG_NAME = 'COMMAND_INT_STAMPED';
CommandIntStamped.PAYLOAD_LENGTH = 47;
CommandIntStamped.MAGIC_NUMBER = 119;
CommandIntStamped.FIELDS = [
    new mavlink_1.MavLinkPacketField('vehicle_timestamp', 'vehicleTimestamp', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('utc_time', 'utcTime', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('param1', 'param1', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('x', 'x', 28, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('y', 'y', 32, false, 4, 'int32_t', ''),
    new mavlink_1.MavLinkPacketField('z', 'z', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 40, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 43, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('frame', 'frame', 44, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('current', 'current', 45, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('autocontinue', 'autocontinue', 46, false, 1, 'uint8_t', ''),
];
/**
 * Send a command with up to seven parameters to the MAV and additional metadata
 */
class CommandLongStamped extends mavlink_1.MavLinkData {
}
exports.CommandLongStamped = CommandLongStamped;
CommandLongStamped.MSG_ID = 224;
CommandLongStamped.MSG_NAME = 'COMMAND_LONG_STAMPED';
CommandLongStamped.PAYLOAD_LENGTH = 45;
CommandLongStamped.MAGIC_NUMBER = 102;
CommandLongStamped.FIELDS = [
    new mavlink_1.MavLinkPacketField('vehicle_timestamp', 'vehicleTimestamp', 0, false, 8, 'uint64_t', ''),
    new mavlink_1.MavLinkPacketField('utc_time', 'utcTime', 8, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('param1', 'param1', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param2', 'param2', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param3', 'param3', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param4', 'param4', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param5', 'param5', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param6', 'param6', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('param7', 'param7', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('command', 'command', 40, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('target_system', 'targetSystem', 42, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('target_component', 'targetComponent', 43, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('confirmation', 'confirmation', 44, false, 1, 'uint8_t', ''),
];
/**
 * Voltage and current sensor data
 */
class SensPower extends mavlink_1.MavLinkData {
}
exports.SensPower = SensPower;
SensPower.MSG_ID = 8002;
SensPower.MSG_NAME = 'SENS_POWER';
SensPower.PAYLOAD_LENGTH = 16;
SensPower.MAGIC_NUMBER = 218;
SensPower.FIELDS = [
    new mavlink_1.MavLinkPacketField('adc121_vspb_volt', 'adc121VspbVolt', 0, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('adc121_cspb_amp', 'adc121CspbAmp', 4, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('adc121_cs1_amp', 'adc121Cs1Amp', 8, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('adc121_cs2_amp', 'adc121Cs2Amp', 12, false, 4, 'float', 'A'),
];
/**
 * Maximum Power Point Tracker (MPPT) sensor data for solar module power performance tracking
 */
class SensMppt extends mavlink_1.MavLinkData {
}
exports.SensMppt = SensMppt;
SensMppt.MSG_ID = 8003;
SensMppt.MSG_NAME = 'SENS_MPPT';
SensMppt.PAYLOAD_LENGTH = 41;
SensMppt.MAGIC_NUMBER = 231;
SensMppt.FIELDS = [
    new mavlink_1.MavLinkPacketField('mppt_timestamp', 'mpptTimestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('mppt1_volt', 'mppt1Volt', 8, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('mppt1_amp', 'mppt1Amp', 12, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('mppt2_volt', 'mppt2Volt', 16, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('mppt2_amp', 'mppt2Amp', 20, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('mppt3_volt', 'mppt3Volt', 24, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('mppt3_amp', 'mppt3Amp', 28, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('mppt1_pwm', 'mppt1Pwm', 32, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('mppt2_pwm', 'mppt2Pwm', 34, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('mppt3_pwm', 'mppt3Pwm', 36, false, 2, 'uint16_t', 'us'),
    new mavlink_1.MavLinkPacketField('mppt1_status', 'mppt1Status', 38, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mppt2_status', 'mppt2Status', 39, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('mppt3_status', 'mppt3Status', 40, false, 1, 'uint8_t', ''),
];
/**
 * ASL-fixed-wing controller data
 */
class AslctrlData extends mavlink_1.MavLinkData {
}
exports.AslctrlData = AslctrlData;
AslctrlData.MSG_ID = 8004;
AslctrlData.MSG_NAME = 'ASLCTRL_DATA';
AslctrlData.PAYLOAD_LENGTH = 98;
AslctrlData.MAGIC_NUMBER = 172;
AslctrlData.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('h', 'h', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('hRef', 'hRef', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('hRef_t', 'hRefT', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('PitchAngle', 'PitchAngle', 20, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('PitchAngleRef', 'PitchAngleRef', 24, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('q', 'q', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('qRef', 'qRef', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uElev', 'uElev', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uThrot', 'uThrot', 40, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uThrot2', 'uThrot2', 44, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('nZ', 'nZ', 48, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('AirspeedRef', 'AirspeedRef', 52, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('YawAngle', 'YawAngle', 56, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('YawAngleRef', 'YawAngleRef', 60, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('RollAngle', 'RollAngle', 64, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('RollAngleRef', 'RollAngleRef', 68, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('p', 'p', 72, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('pRef', 'pRef', 76, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('r', 'r', 80, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('rRef', 'rRef', 84, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uAil', 'uAil', 88, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uRud', 'uRud', 92, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('aslctrl_mode', 'aslctrlMode', 96, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('SpoilersEngaged', 'SpoilersEngaged', 97, false, 1, 'uint8_t', ''),
];
/**
 * ASL-fixed-wing controller debug data
 */
class AslctrlDebug extends mavlink_1.MavLinkData {
}
exports.AslctrlDebug = AslctrlDebug;
AslctrlDebug.MSG_ID = 8005;
AslctrlDebug.MSG_NAME = 'ASLCTRL_DEBUG';
AslctrlDebug.PAYLOAD_LENGTH = 38;
AslctrlDebug.MAGIC_NUMBER = 251;
AslctrlDebug.FIELDS = [
    new mavlink_1.MavLinkPacketField('i32_1', 'i321', 0, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('f_1', 'f1', 4, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_2', 'f2', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_3', 'f3', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_4', 'f4', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_5', 'f5', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_6', 'f6', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_7', 'f7', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('f_8', 'f8', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('i8_1', 'i81', 36, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('i8_2', 'i82', 37, false, 1, 'uint8_t', ''),
];
/**
 * Extended state information for ASLUAVs
 */
class AsluavStatus extends mavlink_1.MavLinkData {
}
exports.AsluavStatus = AsluavStatus;
AsluavStatus.MSG_ID = 8006;
AsluavStatus.MSG_NAME = 'ASLUAV_STATUS';
AsluavStatus.PAYLOAD_LENGTH = 14;
AsluavStatus.MAGIC_NUMBER = 97;
AsluavStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('Motor_rpm', 'MotorRpm', 0, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('LED_status', 'LEDStatus', 4, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('SATCOM_status', 'SATCOMStatus', 5, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('Servo_status', 'ServoStatus', 6, false, 1, 'uint8_t[]', '', 8),
];
/**
 * Extended EKF state estimates for ASLUAVs
 */
class EkfExt extends mavlink_1.MavLinkData {
}
exports.EkfExt = EkfExt;
EkfExt.MSG_ID = 8007;
EkfExt.MSG_NAME = 'EKF_EXT';
EkfExt.PAYLOAD_LENGTH = 32;
EkfExt.MAGIC_NUMBER = 64;
EkfExt.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('Windspeed', 'Windspeed', 8, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('WindDir', 'WindDir', 12, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('WindZ', 'WindZ', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('Airspeed', 'Airspeed', 20, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('beta', 'beta', 24, false, 4, 'float', 'rad'),
    new mavlink_1.MavLinkPacketField('alpha', 'alpha', 28, false, 4, 'float', 'rad'),
];
/**
 * Off-board controls/commands for ASLUAVs
 */
class AslObctrl extends mavlink_1.MavLinkData {
}
exports.AslObctrl = AslObctrl;
AslObctrl.MSG_ID = 8008;
AslObctrl.MSG_NAME = 'ASL_OBCTRL';
AslObctrl.PAYLOAD_LENGTH = 33;
AslObctrl.MAGIC_NUMBER = 234;
AslObctrl.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('uElev', 'uElev', 8, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uThrot', 'uThrot', 12, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uThrot2', 'uThrot2', 16, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uAilL', 'uAilL', 20, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uAilR', 'uAilR', 24, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('uRud', 'uRud', 28, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('obctrl_status', 'obctrlStatus', 32, false, 1, 'uint8_t', ''),
];
/**
 * Atmospheric sensors (temperature, humidity, ...)
 */
class SensAtmos extends mavlink_1.MavLinkData {
}
exports.SensAtmos = SensAtmos;
SensAtmos.MSG_ID = 8009;
SensAtmos.MSG_NAME = 'SENS_ATMOS';
SensAtmos.PAYLOAD_LENGTH = 16;
SensAtmos.MAGIC_NUMBER = 144;
SensAtmos.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('TempAmbient', 'TempAmbient', 8, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('Humidity', 'Humidity', 12, false, 4, 'float', '%'),
];
/**
 * Battery pack monitoring data for Li-Ion batteries
 */
class SensBatmon extends mavlink_1.MavLinkData {
}
exports.SensBatmon = SensBatmon;
SensBatmon.MSG_ID = 8010;
SensBatmon.MSG_NAME = 'SENS_BATMON';
SensBatmon.PAYLOAD_LENGTH = 41;
SensBatmon.MAGIC_NUMBER = 155;
SensBatmon.FIELDS = [
    new mavlink_1.MavLinkPacketField('batmon_timestamp', 'batmonTimestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('temperature', 'temperature', 8, false, 4, 'float', 'degC'),
    new mavlink_1.MavLinkPacketField('safetystatus', 'safetystatus', 12, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('operationstatus', 'operationstatus', 16, false, 4, 'uint32_t', ''),
    new mavlink_1.MavLinkPacketField('voltage', 'voltage', 20, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('current', 'current', 22, false, 2, 'int16_t', 'mA'),
    new mavlink_1.MavLinkPacketField('batterystatus', 'batterystatus', 24, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('serialnumber', 'serialnumber', 26, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('cellvoltage1', 'cellvoltage1', 28, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cellvoltage2', 'cellvoltage2', 30, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cellvoltage3', 'cellvoltage3', 32, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cellvoltage4', 'cellvoltage4', 34, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cellvoltage5', 'cellvoltage5', 36, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('cellvoltage6', 'cellvoltage6', 38, false, 2, 'uint16_t', 'mV'),
    new mavlink_1.MavLinkPacketField('SoC', 'SoC', 40, false, 1, 'uint8_t', ''),
];
/**
 * Fixed-wing soaring (i.e. thermal seeking) data
 */
class FwSoaringData extends mavlink_1.MavLinkData {
}
exports.FwSoaringData = FwSoaringData;
FwSoaringData.MSG_ID = 8011;
FwSoaringData.MSG_NAME = 'FW_SOARING_DATA';
FwSoaringData.PAYLOAD_LENGTH = 102;
FwSoaringData.MAGIC_NUMBER = 20;
FwSoaringData.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'ms'),
    new mavlink_1.MavLinkPacketField('timestampModeChanged', 'timestampModeChanged', 8, false, 8, 'uint64_t', 'ms'),
    new mavlink_1.MavLinkPacketField('xW', 'xW', 16, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('xR', 'xR', 20, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('xLat', 'xLat', 24, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('xLon', 'xLon', 28, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('VarW', 'VarW', 32, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('VarR', 'VarR', 36, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('VarLat', 'VarLat', 40, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('VarLon', 'VarLon', 44, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('LoiterRadius', 'LoiterRadius', 48, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('LoiterDirection', 'LoiterDirection', 52, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('DistToSoarPoint', 'DistToSoarPoint', 56, false, 4, 'float', 'm'),
    new mavlink_1.MavLinkPacketField('vSinkExp', 'vSinkExp', 60, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('z1_LocalUpdraftSpeed', 'z1LocalUpdraftSpeed', 64, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('z2_DeltaRoll', 'z2DeltaRoll', 68, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('z1_exp', 'z1Exp', 72, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('z2_exp', 'z2Exp', 76, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ThermalGSNorth', 'ThermalGSNorth', 80, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('ThermalGSEast', 'ThermalGSEast', 84, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('TSE_dot', 'TSEDot', 88, false, 4, 'float', 'm/s'),
    new mavlink_1.MavLinkPacketField('DebugVar1', 'DebugVar1', 92, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('DebugVar2', 'DebugVar2', 96, false, 4, 'float', ''),
    new mavlink_1.MavLinkPacketField('ControlMode', 'ControlMode', 100, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('valid', 'valid', 101, false, 1, 'uint8_t', ''),
];
/**
 * Monitoring of sensorpod status
 */
class SensorpodStatus extends mavlink_1.MavLinkData {
}
exports.SensorpodStatus = SensorpodStatus;
SensorpodStatus.MSG_ID = 8012;
SensorpodStatus.MSG_NAME = 'SENSORPOD_STATUS';
SensorpodStatus.PAYLOAD_LENGTH = 16;
SensorpodStatus.MAGIC_NUMBER = 54;
SensorpodStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'ms'),
    new mavlink_1.MavLinkPacketField('free_space', 'freeSpace', 8, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('visensor_rate_1', 'visensorRate1', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('visensor_rate_2', 'visensorRate2', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('visensor_rate_3', 'visensorRate3', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('visensor_rate_4', 'visensorRate4', 13, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('recording_nodes_count', 'recordingNodesCount', 14, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('cpu_temp', 'cpuTemp', 15, false, 1, 'uint8_t', 'degC'),
];
/**
 * Monitoring of power board status
 */
class SensPowerBoard extends mavlink_1.MavLinkData {
}
exports.SensPowerBoard = SensPowerBoard;
SensPowerBoard.MSG_ID = 8013;
SensPowerBoard.MSG_NAME = 'SENS_POWER_BOARD';
SensPowerBoard.PAYLOAD_LENGTH = 46;
SensPowerBoard.MAGIC_NUMBER = 222;
SensPowerBoard.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('pwr_brd_system_volt', 'pwrBrdSystemVolt', 8, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('pwr_brd_servo_volt', 'pwrBrdServoVolt', 12, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('pwr_brd_digital_volt', 'pwrBrdDigitalVolt', 16, false, 4, 'float', 'V'),
    new mavlink_1.MavLinkPacketField('pwr_brd_mot_l_amp', 'pwrBrdMotLAmp', 20, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_mot_r_amp', 'pwrBrdMotRAmp', 24, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_analog_amp', 'pwrBrdAnalogAmp', 28, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_digital_amp', 'pwrBrdDigitalAmp', 32, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_ext_amp', 'pwrBrdExtAmp', 36, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_aux_amp', 'pwrBrdAuxAmp', 40, false, 4, 'float', 'A'),
    new mavlink_1.MavLinkPacketField('pwr_brd_status', 'pwrBrdStatus', 44, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('pwr_brd_led_status', 'pwrBrdLedStatus', 45, false, 1, 'uint8_t', ''),
];
/**
 * Status of GSM modem (connected to onboard computer)
 */
class GsmLinkStatus extends mavlink_1.MavLinkData {
}
exports.GsmLinkStatus = GsmLinkStatus;
GsmLinkStatus.MSG_ID = 8014;
GsmLinkStatus.MSG_NAME = 'GSM_LINK_STATUS';
GsmLinkStatus.PAYLOAD_LENGTH = 14;
GsmLinkStatus.MAGIC_NUMBER = 200;
GsmLinkStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('gsm_modem_type', 'gsmModemType', 8, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('gsm_link_type', 'gsmLinkType', 9, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rssi', 'rssi', 10, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rsrp_rscp', 'rsrpRscp', 11, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('sinr_ecio', 'sinrEcio', 12, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rsrq', 'rsrq', 13, false, 1, 'uint8_t', ''),
];
/**
 * Status of the SatCom link
 */
class SatcomLinkStatus extends mavlink_1.MavLinkData {
}
exports.SatcomLinkStatus = SatcomLinkStatus;
SatcomLinkStatus.MSG_ID = 8015;
SatcomLinkStatus.MSG_NAME = 'SATCOM_LINK_STATUS';
SatcomLinkStatus.PAYLOAD_LENGTH = 24;
SatcomLinkStatus.MAGIC_NUMBER = 23;
SatcomLinkStatus.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('last_heartbeat', 'lastHeartbeat', 8, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('failed_sessions', 'failedSessions', 16, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('successful_sessions', 'successfulSessions', 18, false, 2, 'uint16_t', ''),
    new mavlink_1.MavLinkPacketField('signal_quality', 'signalQuality', 20, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('ring_pending', 'ringPending', 21, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('tx_session_pending', 'txSessionPending', 22, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('rx_session_pending', 'rxSessionPending', 23, false, 1, 'uint8_t', ''),
];
/**
 * Calibrated airflow angle measurements
 */
class SensorAirflowAngles extends mavlink_1.MavLinkData {
}
exports.SensorAirflowAngles = SensorAirflowAngles;
SensorAirflowAngles.MSG_ID = 8016;
SensorAirflowAngles.MSG_NAME = 'SENSOR_AIRFLOW_ANGLES';
SensorAirflowAngles.PAYLOAD_LENGTH = 18;
SensorAirflowAngles.MAGIC_NUMBER = 149;
SensorAirflowAngles.FIELDS = [
    new mavlink_1.MavLinkPacketField('timestamp', 'timestamp', 0, false, 8, 'uint64_t', 'us'),
    new mavlink_1.MavLinkPacketField('angleofattack', 'angleofattack', 8, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('sideslip', 'sideslip', 12, false, 4, 'float', 'deg'),
    new mavlink_1.MavLinkPacketField('angleofattack_valid', 'angleofattackValid', 16, false, 1, 'uint8_t', ''),
    new mavlink_1.MavLinkPacketField('sideslip_valid', 'sideslipValid', 17, false, 1, 'uint8_t', ''),
];
exports.REGISTRY = {
    223: CommandIntStamped,
    224: CommandLongStamped,
    8002: SensPower,
    8003: SensMppt,
    8004: AslctrlData,
    8005: AslctrlDebug,
    8006: AsluavStatus,
    8007: EkfExt,
    8008: AslObctrl,
    8009: SensAtmos,
    8010: SensBatmon,
    8011: FwSoaringData,
    8012: SensorpodStatus,
    8013: SensPowerBoard,
    8014: GsmLinkStatus,
    8015: SatcomLinkStatus,
    8016: SensorAirflowAngles,
};
