import {IncludedObj, RelationshipObj} from "../types/api";

export const getIncludedRelationshipsOfType = (
  included: IncludedObj[],
  relationships: RelationshipObj[],
  type: string
) => {
  const relationshipIds: string[] = relationships.map((rel: RelationshipObj) => {
    return rel.id;
  });
  const includedObjs: IncludedObj[] = included.filter((incObj: IncludedObj) => {
    return (incObj.type === type && relationshipIds.includes(incObj.id))
  });
  return includedObjs;
}
