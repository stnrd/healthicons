import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Ghana extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Ghana({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 8C26 6.89543 25.1046 6 24 6C22.8954 6 22 6.89543 22 8V10.114C20.8528 10.2795 19.7247 10.5878 18.6424 11.0361C16.0843 12.0957 13.8978 13.8901 12.3594 16.1924C10.8211 18.4947 10 21.2014 10 23.9704C10 26.7393 10.8211 29.4461 12.3594 31.7484C13.8978 34.0506 16.0843 35.8451 18.6424 36.9047C19.7247 37.353 20.8528 37.6612 22 37.8268V40C22 41.1046 22.8954 42 24 42C25.1046 42 26 41.1046 26 40V37.8268C26.2444 37.7915 26.4882 37.7497 26.7313 37.7014C29.447 37.1612 31.9416 35.8278 33.8995 33.8699C34.6805 33.0888 34.6805 31.8225 33.8995 31.0414C33.1184 30.2604 31.8521 30.2604 31.0711 31.0414C29.6844 32.4282 27.9208 33.3763 26 33.7683L26 14.1724C27.9208 14.5645 29.6844 15.5126 31.0711 16.8993C31.8521 17.6804 33.1184 17.6804 33.8995 16.8993C34.6805 16.1183 34.6805 14.8519 33.8995 14.0709C31.9416 12.1129 29.447 10.7796 26.7313 10.2394C26.4882 10.191 26.2444 10.1492 26 10.114V8ZM22 14.1724C21.3775 14.2995 20.7657 14.4861 20.1732 14.7316C18.3459 15.4885 16.7841 16.7702 15.6853 18.4147C14.5865 20.0592 14 21.9926 14 23.9704C14 25.9482 14.5865 27.8816 15.6853 29.5261C16.7841 31.1706 18.3459 32.4523 20.1732 33.2092C20.7657 33.4546 21.3775 33.6413 22 33.7683L22 14.1724Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}