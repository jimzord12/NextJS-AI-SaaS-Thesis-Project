import React, { useState, useEffect, ComponentType } from "react";

// Props type which is any object, this should cover most use cases
type Props = Record<string, any>;

function withClientSideRendering<P extends Props>(Component: ComponentType<P>) {
  return function WrappedComponent(props: P) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default withClientSideRendering;
