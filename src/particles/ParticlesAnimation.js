import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./ParticlesAnimation.css";
import Config from "./Config";

const ParticlesAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      className="tsparticle"
      options={Config}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
export default ParticlesAnimation;
