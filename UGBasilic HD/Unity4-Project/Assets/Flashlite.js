#pragma strict

function Start () {
light.enabled=true;
}

function Update () {

}
function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
        print("Detected character: " + e.character + " | Detected key code: " + e.keyCode);        
        switch (e.character){
        case "f": if (light.enabled){ light.enabled=false; } else { light.enabled=true; }; break;
        case "q": light.intensity=light.intensity+1.0; light.range=light.range+50.0; break;
        case "e": light.intensity=light.intensity-1.0; light.range=light.range-50.0; break;
        };
        switch (e.keyCode){
        case KeyCode.Escape : Application.Quit(); break;
        };
        
    }
}