import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Woozy extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Woozy({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 20.5C28 19.1193 29.1193 18 30.5 18C31.8807 18 33 19.1193 33 20.5C33 21.8807 31.8807 23 30.5 23C29.1193 23 28 21.8807 28 20.5ZM30.5 20C30.2239 20 30 20.2239 30 20.5C30 20.7761 30.2239 21 30.5 21C30.7761 21 31 20.7761 31 20.5C31 20.2239 30.7761 20 30.5 20Z" fill="#333333"/>
<path d="M15.8073 22.2328C15.1242 21.7953 14.6238 21.0878 14.7428 20.3501C14.7667 20.2024 14.8554 20.0731 14.9847 19.9978C15.114 19.9225 15.2702 19.909 15.4105 19.9611C17.2288 20.6361 19.2567 20.2174 21.0526 18.5126C21.1764 18.3951 21.3517 18.3488 21.5174 18.39C21.6831 18.4311 21.8163 18.554 21.8708 18.7158C22.1025 19.4046 21.8949 20.3341 21.3905 21.0975C20.8685 21.8877 19.983 22.579 18.7371 22.7629C17.5386 22.9399 16.5211 22.6899 15.8073 22.2328Z" fill="#333333"/>
<path d="M16.5922 31.381L16.594 31.3798L16.6219 31.3631C16.6475 31.3478 16.6891 31.3237 16.7453 31.2929C16.8579 31.2313 17.0274 31.1438 17.2425 31.0485C17.6761 30.8564 18.2757 30.6411 18.9541 30.5337C20.2808 30.3236 21.8743 30.518 23.2331 32.1418C25.1584 34.4426 27.5357 34.7305 29.3588 34.4418C30.2552 34.2998 31.0253 34.0204 31.5676 33.7802C31.8405 33.6592 32.0605 33.5461 32.2155 33.4613C32.2931 33.4188 32.3547 33.3831 32.3989 33.3569L32.4208 33.3439L32.452 33.3249L32.4684 33.3147L32.4741 33.3111L32.4763 33.3098L32.478 33.3087C32.8345 33.0821 33.0102 32.6559 32.917 32.2439C32.8237 31.8319 32.4816 31.5229 32.0622 31.472L24.4983 30.5532C22.6239 28.5322 20.3804 28.2829 18.6412 28.5583C17.7448 28.7003 16.9747 28.9797 16.4324 29.2199C16.1595 29.3408 15.9395 29.454 15.7845 29.5388C15.7069 29.5813 15.6453 29.6169 15.6011 29.6432L15.5698 29.6619L15.548 29.6752L15.5316 29.6854L15.5259 29.6889L15.5237 29.6903L15.522 29.6914C15.0559 29.9876 14.9182 30.6056 15.2144 31.0718C15.5101 31.537 16.1263 31.6751 16.5922 31.381Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}