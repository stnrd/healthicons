import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Leg extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Leg({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1338 19.672L21.3303 4.79C21.4293 4.32915 21.8367 4 22.308 4H32.8652C33.4674 4 33.9345 4.52795 33.8141 5.118C32.2655 12.7051 25 20.8205 25 20.8205L26.281 22.9751C27.0763 24.313 27.4642 25.8539 27.397 27.4089L27 36.5897L28.8435 38.8508C29.555 39.7234 29.7258 40.9179 29.2873 41.9549L29.2317 42.0866C28.5688 43.6545 26.707 44.3203 25.2002 43.5283C24.4231 43.1199 23.5305 42.9872 22.6682 43.152L18.6861 43.9132C18.5623 43.9368 18.4366 43.9487 18.3106 43.9487H15C13.8954 43.9487 13 43.0533 13 41.9487V40.7949H16L22.5 38.1667L18.301 25.4141C18.1016 24.8086 18 24.1751 18 23.5376V20.932C18 20.5084 18.0448 20.0861 18.1338 19.672Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}