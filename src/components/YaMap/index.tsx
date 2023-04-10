import { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './yaMap.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const YaMap: FC = (  ) => {
	return (
    <YMaps>
      <Map
        className={cx( 'wrap' )}
        defaultState={{
          center: [55.701012, 37.382459],
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark defaultGeometry={[55.701012, 37.382459]} />
      </Map>
    </YMaps>
	);
};
