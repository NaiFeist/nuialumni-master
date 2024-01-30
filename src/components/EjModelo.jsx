import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Modelo from './ar/Modelo';


function EjModelo() {
    return (
      <>
        <ARButton />
        <Canvas>
          <XR>
            <Modelo/>
          </XR>
        </Canvas>
      </>
    );
  }
  export default EjModelo;