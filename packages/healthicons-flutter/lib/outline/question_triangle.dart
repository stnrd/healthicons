import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuestionTriangle extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const QuestionTriangle({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C24.3788 6 24.725 6.214 24.8944 6.55279L41.8944 40.5528C42.0494 40.8628 42.0329 41.2309 41.8507 41.5257C41.6684 41.8205 41.3466 42 41 42H7C6.65342 42 6.33156 41.8205 6.14935 41.5257C5.96714 41.2309 5.95058 40.8628 6.10557 40.5528L23.1056 6.55279C23.275 6.214 23.6212 6 24 6ZM8.61803 40H39.382L24 9.23607L8.61803 40Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9999 35C24.4476 35 23.9999 35.4477 23.9999 36C23.9999 36.5523 24.4476 37 24.9999 37C25.5522 37 25.9999 36.5523 25.9999 36C25.9999 35.4477 25.5522 35 24.9999 35ZM21.9999 36C21.9999 34.3431 23.343 33 24.9999 33C26.6567 33 27.9999 34.3431 27.9999 36C27.9999 37.6569 26.6567 39 24.9999 39C23.343 39 21.9999 37.6569 21.9999 36Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4966 21.2847C21.7056 20.6985 23.0934 20.4637 24.3782 20.5045C25.6496 20.5449 27.0656 20.8644 28.2449 21.6489C29.5011 22.4844 30.4975 23.8824 30.4975 25.7612C30.4975 27.638 29.7233 29.1198 28.397 30.0338C28.0826 30.2504 27.7582 30.4202 27.4382 30.5536C27.1863 31.6679 26.1902 32.5 24.9998 32.5C23.619 32.5 22.4998 31.3807 22.4998 30V28.5586C22.4998 27.2427 23.5199 26.152 24.8329 26.0642C25.0639 26.0487 25.2424 26.0194 25.3725 25.9853C25.4191 25.9731 25.4566 25.961 25.4861 25.95C25.4905 25.9188 25.4945 25.878 25.4964 25.8261C25.4902 25.8218 25.4834 25.8171 25.4758 25.812C25.2802 25.6819 24.8465 25.5219 24.2193 25.502C23.605 25.4825 23.0435 25.6065 22.6778 25.7838C22.512 25.8642 22.4349 25.9295 22.406 25.9583C22.0384 27.2607 20.6961 28.038 19.3783 27.6996C18.041 27.3561 17.2354 25.9936 17.5788 24.6563C18.0202 22.9378 19.2944 21.8675 20.4966 21.2847ZM24.3146 22.5035C23.2978 22.4712 22.2406 22.6618 21.3691 23.0843C20.4962 23.5075 19.7636 24.1895 19.516 25.1538C19.4473 25.4213 19.6084 25.6938 19.8759 25.7625C20.1433 25.8312 20.4158 25.67 20.4845 25.4026C20.6347 24.8179 21.0939 24.3291 21.8053 23.9842C22.5081 23.6435 23.4001 23.4749 24.2829 23.503C25.1687 23.5312 25.9949 23.7553 26.5835 24.1468C26.8415 24.3184 27.0856 24.5395 27.2585 24.8384C27.4369 25.1468 27.4975 25.4653 27.4975 25.7612C27.4975 26.2625 27.4024 26.6353 27.262 26.9156C27.1225 27.1941 26.9275 27.4031 26.6948 27.5635C26.2167 27.8929 25.5762 28.0189 24.9664 28.0597C24.7038 28.0773 24.4998 28.2954 24.4998 28.5586V30C24.4998 30.2761 24.7236 30.5 24.9998 30.5C25.2759 30.5 25.4998 30.2761 25.4998 30V29.8236C25.4998 29.3771 25.7957 28.9847 26.225 28.8621C26.5878 28.7584 26.9431 28.6067 27.2622 28.3869C27.998 27.8798 28.4975 27.0417 28.4975 25.7612C28.4975 24.6684 27.9406 23.8485 27.1373 23.3141C26.3518 22.7917 25.329 22.5358 24.3146 22.5035Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}