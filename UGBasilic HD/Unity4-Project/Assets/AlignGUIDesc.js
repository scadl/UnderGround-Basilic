#pragma strict
var watermark: GUITexture;
var wat_desc="\nF2 - скрыть логотип.";

function Start () {
	//print(Screen.height);
		guiText.pixelOffset=Vector2(Screen.width-5,Screen.height-5);
		guiText.text="F1 - подсказка." + wat_desc;
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
        switch (e.keyCode){
        case KeyCode.F1 : guiText.text="Базовое управление:\n W,A,S,D - Идти\n Пробел - прыжок\n F - Вкл/выкл фонарик \n Q - Увеличить мощность и дальность вашего фонарика\n E - Уменьшить мощность и дальность вашего фонарика\n\n Esc - Выйти из программы\n F3 - скрыть подсказку";  break;
        case KeyCode.F3 : guiText.text="F1 - подсказка." + wat_desc; break;
        case KeyCode.F2 : watermark.enabled=false; wat_desc=""; guiText.text="F1 - подсказка."; break;
        };
        
    }
}

function Update () {

}