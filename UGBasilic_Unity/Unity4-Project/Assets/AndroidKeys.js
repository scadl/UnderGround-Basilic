#pragma strict

function Start () {

}

function Update () {

}

function OnGUI() {
    if (Application.platform == RuntimePlatform.Android)
            {
                if (Input.GetKey(KeyCode.Escape))
                {
                    // Insert Code Here (I.E. Load Scene, Etc)
                    Application.Quit();
     
                    return;
                }
			}
}