import useWindowSize from './useWindowSize';


const useIsMobile = () => {
    // Initialize state with undefined width/height so server and client renders match
    const size = useWindowSize();

    const data = {size, isMobile: true}

    if(size.width > 768) {
      data.isMobile = false
    }

    return data;
}

export default useIsMobile