import { useEffect } from 'react' 
 


function Map(props) {

    function onScriptLoad () {
        const map = new window.google.maps.Map(
            document.getElementById(props.id), props.options
        )

        return props.onMapLoad(map)
    }

    useEffect(() => {
        if (!window.google) {
            const scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.src = `https://maps.google.com/maps/api/js?key=AIzaSyBiy5kRlv24Mv43HzXGlfs06D6HonBE3Fs`;
            const getScriptElement = document.getElementsByTagName('script')[0];
            getScriptElement.parentNode.insertBefore(scriptElement, getScriptElement);
            
            scriptElement.addEventListener('load', e => {
              onScriptLoad()
            })

            return () => scriptElement.removeEventListener(`load`, e => {
                onScriptLoad()
              })
          } else {
            onScriptLoad()
          }
    }, [])

    let mapStyle = props.mapStyle

    return (
        <div className={`z-0 ${mapStyle}`} id={props.id} >
            
        </div>
    )
}

export default Map