import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StarLarge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const StarLarge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.0969 7.06406C23.4663 6.31198 24.5337 6.31198 24.9031 7.06406L29.6852 16.7997C29.8319 17.0984 30.1155 17.3054 30.4435 17.3533L41.1366 18.9145C41.9627 19.0351 42.2925 20.055 41.6948 20.6404L33.9571 28.2186C33.7198 28.4511 33.6115 28.786 33.6675 29.1143L35.4941 39.8148C35.6352 40.6414 34.7717 41.2718 34.0329 40.8815L24.4686 35.8294C24.1753 35.6744 23.8248 35.6744 23.5314 35.8294L13.9671 40.8815C13.2283 41.2718 12.3648 40.6414 12.5059 39.8148L14.3325 29.1143C14.3885 28.786 14.2802 28.4511 14.0429 28.2186L6.30523 20.6404C5.7075 20.055 6.03734 19.0351 6.86337 18.9145L17.5565 17.3533C17.8845 17.3054 18.1681 17.0984 18.3148 16.7997L23.0969 7.06406Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}