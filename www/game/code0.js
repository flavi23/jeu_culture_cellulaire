gdjs.GameSceneCode = {};
gdjs.GameSceneCode.GDPlayerObjects1= [];
gdjs.GameSceneCode.GDPlayerObjects2= [];
gdjs.GameSceneCode.GDPlayerObjects3= [];
gdjs.GameSceneCode.GDTargetObjects1= [];
gdjs.GameSceneCode.GDTargetObjects2= [];
gdjs.GameSceneCode.GDTargetObjects3= [];
gdjs.GameSceneCode.GDGroundLayer1Objects1= [];
gdjs.GameSceneCode.GDGroundLayer1Objects2= [];
gdjs.GameSceneCode.GDGroundLayer1Objects3= [];
gdjs.GameSceneCode.GDEnergyBarObjects1= [];
gdjs.GameSceneCode.GDEnergyBarObjects2= [];
gdjs.GameSceneCode.GDEnergyBarObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects3= [];
gdjs.GameSceneCode.GDPoisonObjects1= [];
gdjs.GameSceneCode.GDPoisonObjects2= [];
gdjs.GameSceneCode.GDPoisonObjects3= [];
gdjs.GameSceneCode.GDWalkingenemyObjects1= [];
gdjs.GameSceneCode.GDWalkingenemyObjects2= [];
gdjs.GameSceneCode.GDWalkingenemyObjects3= [];
gdjs.GameSceneCode.GDStatueObjects1= [];
gdjs.GameSceneCode.GDStatueObjects2= [];
gdjs.GameSceneCode.GDStatueObjects3= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects1= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects2= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects3= [];
gdjs.GameSceneCode.GDScoreObjects1= [];
gdjs.GameSceneCode.GDScoreObjects2= [];
gdjs.GameSceneCode.GDScoreObjects3= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameSceneCode.GDFlatLightJoystickObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFlatLightJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDEnergyBarObjects1Objects = Hashtable.newFrom({"EnergyBar": gdjs.GameSceneCode.GDEnergyBarObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDEnergyBarObjects1Objects = Hashtable.newFrom({"EnergyBar": gdjs.GameSceneCode.GDEnergyBarObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameSceneCode.GDPlayerObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDStatueObjects2Objects = Hashtable.newFrom({"Statue": gdjs.GameSceneCode.GDStatueObjects2});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Statue"), gdjs.GameSceneCode.GDStatueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDStatueObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameSceneCode.GDScoreObjects2);
/* Reuse gdjs.GameSceneCode.GDStatueObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - 0.1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDStatueObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStatueObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PitchScaling") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameSceneCode.GDPlayerObjects2, "Walkingenemy": gdjs.GameSceneCode.GDWalkingenemyObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameSceneCode.GDPoisonObjects2, "Walkingenemy": gdjs.GameSceneCode.GDWalkingenemyObjects2});
gdjs.GameSceneCode.mapOfEmptyGDPlayerObjects = Hashtable.newFrom({"Player": []});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameSceneCode.GDPoisonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Walkingenemy"), gdjs.GameSceneCode.GDWalkingenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDPlayerObjects2 */
/* Reuse gdjs.GameSceneCode.GDWalkingenemyObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDWalkingenemyObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkingenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDPlayerObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameSceneCode.GDPlayerObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTargetObjects1Objects = Hashtable.newFrom({"Target": gdjs.GameSceneCode.GDTargetObjects1});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.GameSceneCode.GDTargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDTargetObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10905876);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "WinGame", false, 50, 1);
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10907268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Bottom"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Top"), gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects1[0].getAABBBottom()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects1[0].getAABBTop()), "", 0);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameSceneCode.GDPlayerObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects = Hashtable.newFrom({"Walkingenemy": gdjs.GameSceneCode.GDWalkingenemyObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameSceneCode.GDPlayerObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects = Hashtable.newFrom({"Walkingenemy": gdjs.GameSceneCode.GDWalkingenemyObjects2});
gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Walkingenemy"), gdjs.GameSceneCode.GDWalkingenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDWalkingenemyObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDWalkingenemyObjects2[k] = gdjs.GameSceneCode.GDWalkingenemyObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDWalkingenemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDWalkingenemyObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkingenemyObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkingenemyObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Walkingenemy"), gdjs.GameSceneCode.GDWalkingenemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPlayerObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkingenemyObjects2Objects, 400, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDWalkingenemyObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDWalkingenemyObjects2[k] = gdjs.GameSceneCode.GDWalkingenemyObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDWalkingenemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDWalkingenemyObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkingenemyObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkingenemyObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDWalkingenemyObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Walkingenemy"), gdjs.GameSceneCode.GDWalkingenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDWalkingenemyObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDWalkingenemyObjects1[i].getVariableBoolean(gdjs.GameSceneCode.GDWalkingenemyObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDWalkingenemyObjects1[k] = gdjs.GameSceneCode.GDWalkingenemyObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDWalkingenemyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects1);
/* Reuse gdjs.GameSceneCode.GDWalkingenemyObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkingenemyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkingenemyObjects1[i].addForceTowardPosition((( gdjs.GameSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDPlayerObjects1[0].getCenterYInScene()), 50, 0);
}
}}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.GameSceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerObjects1[i].setZOrder(1000);
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EnergyBar"), gdjs.GameSceneCode.GDEnergyBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundLayer1"), gdjs.GameSceneCode.GDGroundLayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Walkingenemy"), gdjs.GameSceneCode.GDWalkingenemyObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDGroundLayer1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGroundLayer1Objects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGroundLayer1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGroundLayer1Objects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDGroundLayer1Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGroundLayer1Objects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDEnergyBarObjects1Objects, false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDWalkingenemyObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkingenemyObjects1[i].separateFromObjectsList(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDEnergyBarObjects1Objects, false);
}
}}

}


{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList4(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList6(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDPlayerObjects1.length = 0;
gdjs.GameSceneCode.GDPlayerObjects2.length = 0;
gdjs.GameSceneCode.GDPlayerObjects3.length = 0;
gdjs.GameSceneCode.GDTargetObjects1.length = 0;
gdjs.GameSceneCode.GDTargetObjects2.length = 0;
gdjs.GameSceneCode.GDTargetObjects3.length = 0;
gdjs.GameSceneCode.GDGroundLayer1Objects1.length = 0;
gdjs.GameSceneCode.GDGroundLayer1Objects2.length = 0;
gdjs.GameSceneCode.GDGroundLayer1Objects3.length = 0;
gdjs.GameSceneCode.GDEnergyBarObjects1.length = 0;
gdjs.GameSceneCode.GDEnergyBarObjects2.length = 0;
gdjs.GameSceneCode.GDEnergyBarObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595TopObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_9595BottomObjects3.length = 0;
gdjs.GameSceneCode.GDPoisonObjects1.length = 0;
gdjs.GameSceneCode.GDPoisonObjects2.length = 0;
gdjs.GameSceneCode.GDPoisonObjects3.length = 0;
gdjs.GameSceneCode.GDWalkingenemyObjects1.length = 0;
gdjs.GameSceneCode.GDWalkingenemyObjects2.length = 0;
gdjs.GameSceneCode.GDWalkingenemyObjects3.length = 0;
gdjs.GameSceneCode.GDStatueObjects1.length = 0;
gdjs.GameSceneCode.GDStatueObjects2.length = 0;
gdjs.GameSceneCode.GDStatueObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDScoreObjects1.length = 0;
gdjs.GameSceneCode.GDScoreObjects2.length = 0;
gdjs.GameSceneCode.GDScoreObjects3.length = 0;

gdjs.GameSceneCode.eventsList7(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
