package jp.co.sample;

import jp.co.sample.common.BaseEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SampleEntity extends BaseEntity{

	private String id;

	private String name;

	private String pass;

	private String Authority;

	private String CorpId;

	public SampleEntity() {
		super("mybatis_config", "");
		// TODO 自動生成されたコンストラクター・スタブ
	}

}
