// ���̃t�@�C���́Awwwroot/index.html �� script �^�O�ɂ���ēǂݍ��܂�܂��B

// �ȉ��� IgbCategoryChart �� SeriesAddedScript �p�����[�^�[�Ɏw�肷�� JavaScript �ł��B
// IgbCategoryChart �̊e��V���[�Y�v�f���ǉ�����邽�тɌĂяo����܂��B
igRegisterScript("onSeriesAddedScript", (chart, context) => {

    const series = context.series;

    // series.title ���Q�Ƃ��A�V���[�Y�v�f�̃^�C�g���ɉ����Đ������̐F�A������ύX���܂��B
    // (���̗�ł́AEurope �Ƃ����^�C�g���̃V���[�Y�v�f�݂̂�ΏۂɁA���̐F�A���A��ނ̕ύX���f�����X�g���[�V�������Ă��܂��B)
    // - ����́Aseries �� dashArray �v���p�e�B�ɔz����w�肷�邱�ƂŕύX�ł��܂��B
    // - ���̐F�� series �� brush �v���p�e�B�� HTML �̃J���[�R�[�h��������w�肷�邱�ƂŕύX�ł��܂��B
    // - ���̑����� series �� thickness �v���p�e�B�ɑ������������l (����l�� 2) ���w�肷�邱�ƂŕύX�ł��܂��B
    switch (series.title) {
        case "Europe":
            series.dashArray = [10, 3, 5, 3]; // ��_�j�� (�\�E�\�E�\�E�\)
            series.brush = "#ff6060"; // ���̐F��ԂɕύX
            series.thickness = 4; // ���̑����� 4 �ɕύX (�f�t�H���g�� 2)
            break;
    }

}, false);
