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
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.9031 7.06406C24.5337 6.31198 23.4663 6.31198 23.0969 7.06406L18.3148 16.7997C18.1681 17.0984 17.8845 17.3054 17.5565 17.3533L6.86337 18.9145C6.03734 19.0351 5.7075 20.055 6.30523 20.6404L14.0429 28.2186C14.2802 28.4511 14.3885 28.786 14.3325 29.1143L12.5059 39.8148C12.3648 40.6414 13.2283 41.2718 13.9671 40.8815L23.5314 35.8294C23.8248 35.6744 24.1753 35.6744 24.4686 35.8294L34.0329 40.8815C34.7717 41.2718 35.6352 40.6414 35.4941 39.8148L33.6675 29.1143C33.6115 28.786 33.7198 28.4511 33.9571 28.2186L41.6948 20.6404C42.2925 20.055 41.9627 19.0351 41.1366 18.9145L30.4435 17.3533C30.1155 17.3054 29.8319 17.0984 29.6852 16.7997L24.9031 7.06406Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}