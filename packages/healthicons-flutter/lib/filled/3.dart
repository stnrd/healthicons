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
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8692 14C28.1915 14 30 15.8313 30 18C30 20.1687 28.1915 22 25.8692 22H21.782C20.6774 22 19.782 22.8954 19.782 24C19.782 25.1046 20.6774 26 21.782 26H25.8692C28.1915 26 30 27.8313 30 30C30 32.1687 28.1915 34 25.8692 34H21.782C19.9595 34 18.438 32.8626 17.8811 31.3206C17.5059 30.2817 16.3595 29.7437 15.3206 30.1189C14.2817 30.4941 13.7437 31.6405 14.1189 32.6794C15.2453 35.7982 18.2656 38 21.782 38H25.8692C30.3188 38 34 34.4587 34 30C34 27.5963 32.9302 25.4593 31.2469 24C32.9302 22.5407 34 20.4037 34 18C34 13.5413 30.3188 10 25.8692 10H21.782C18.2656 10 15.2453 12.2018 14.1189 15.3206C13.7437 16.3595 14.2817 17.5059 15.3206 17.8811C16.3595 18.2563 17.5059 17.7183 17.8811 16.6794C18.438 15.1374 19.9595 14 21.782 14H25.8692Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}