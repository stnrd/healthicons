import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Svg3 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Svg3({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35 18C35 12.9673 30.8491 9 25.8692 9H21.782C17.8421 9 14.4471 11.468 13.1784 14.981C12.6156 16.5393 13.4226 18.2588 14.981 18.8216C16.5393 19.3844 18.2588 18.5774 18.8216 17.019C19.2361 15.8715 20.3828 15 21.782 15H25.8692C27.6566 15 29 16.4008 29 18C29 19.5992 27.6566 21 25.8692 21H21.782C20.1251 21 18.782 22.3431 18.782 24C18.782 25.6569 20.1251 27 21.782 27H25.8692C27.6566 27 29 28.4008 29 30C29 31.5992 27.6566 33 25.8692 33H21.782C20.3828 33 19.2361 32.1285 18.8216 30.981C18.2588 29.4226 16.5393 28.6156 14.981 29.1784C13.4226 29.7412 12.6156 31.4607 13.1784 33.019C14.4471 36.532 17.8421 39 21.782 39H25.8692C30.8491 39 35 35.0327 35 30C35 27.6813 34.1154 25.5838 32.6756 24C34.1154 22.4162 35 20.3187 35 18ZM25.8692 11C29.7885 11 33 14.1153 33 18C33 20.0978 32.0683 21.9644 30.5918 23.2444C30.3727 23.4344 30.2469 23.71 30.2469 24C30.2469 24.29 30.3727 24.5656 30.5918 24.7556C32.0683 26.0356 33 27.9022 33 30C33 33.8847 29.7885 37 25.8692 37H21.782C18.6892 37 16.0435 35.0644 15.0595 32.3397C14.8719 31.8202 15.1409 31.2471 15.6603 31.0595C16.1798 30.8719 16.7529 31.1409 16.9405 31.6603C17.6399 33.5966 19.5362 35 21.782 35H25.8692C28.7264 35 31 32.7382 31 30C31 27.2618 28.7264 25 25.8692 25H21.782C21.2297 25 20.782 24.5523 20.782 24C20.782 23.4477 21.2297 23 21.782 23H25.8692C28.7264 23 31 20.7382 31 18C31 15.2618 28.7264 13 25.8692 13H21.782C19.5362 13 17.6399 14.4034 16.9405 16.3397C16.7529 16.8591 16.1798 17.1281 15.6603 16.9405C15.1409 16.7529 14.8719 16.1798 15.0595 15.6603C16.0435 12.9356 18.6892 11 21.782 11H25.8692Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}