import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ClinicalA extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ClinicalA({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4C18.4477 4 18 4.44772 18 5V9C18 9.55228 18.4477 10 19 10H20V11.2729C19.4174 11.4788 19 12.0344 19 12.6875V39C19 41.7614 21.2386 44 24 44C26.7614 44 29 41.7614 29 39V12.6875C29 12.0344 28.5826 11.4788 28 11.2729V10H29C29.5523 10 30 9.55228 30 9V5C30 4.44772 29.5523 4 29 4H19ZM21 13.1021C21.5826 12.8962 22 12.3406 22 11.6875V10H26V11.6875C26 12.3406 26.4174 12.8962 27 13.1021V18H21V13.1021ZM27 24.9853L22.0153 20H21V21.1569L27 27.1569V24.9853ZM24.8436 20L27 22.1567V20.9853L26.0147 20H24.8436ZM27 29.9854L21 23.9854V26.1569L27 32.1569V29.9854ZM27 37.1569L21 31.1569V28.9854L27 34.9854V37.1569ZM26.8748 39.8602L21 33.9854V36.1568L26.0414 41.1983C26.4281 40.8391 26.7198 40.3792 26.8748 39.8602ZM24 42C22.3431 42 21 40.6569 21 39V38.9853L24.0146 42L24 42ZM20 6V8H28V6H20Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}